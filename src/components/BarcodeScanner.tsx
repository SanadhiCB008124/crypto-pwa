import  { useEffect, useRef, useState } from "react";

declare class BarcodeDetector {
    constructor(options?: BarcodeDetectorOptions);

    static getSupportedFormats(): Promise<string[]>;

    detect(image: ImageBitmapSource): Promise<BarcodeDetectionResult[]>;
}

interface BarcodeDetectorOptions {
    formats: string[];
}

interface BarcodeDetectionResult {
    rawValue: string;
}

declare type ImageBitmapSource = HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap;


function BarcodeScanner() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [detectedCodes, setDetectedCodes] = useState<string[]>([]);

    useEffect(() => {
        async function startBarcodeScanner() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error("Error accessing camera:", error);
            }
        }

        startBarcodeScanner();
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        const handleFrame = async () => {
            if (video && ctx) {
                ctx.drawImage(video, 0, 0, canvas?.width || 0, canvas?.height || 0);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const imageBitmap = await createImageBitmap(canvas);

                const barcodeDetector = new BarcodeDetector({ formats: ["qr_code", "ean_13", "code_128"] });
                const barcodes = await barcodeDetector.detect(imageBitmap);

                if (barcodes.length > 0) {
                    const detectedValues = barcodes.map((barcode) => barcode.rawValue);
                    setDetectedCodes(detectedValues);
                }

                requestAnimationFrame(handleFrame);
            }
        };

        handleFrame();
    }, []);

    return (
        <div>
            <video ref={videoRef} autoPlay playsInline muted style={{ display: "none" }} />
            <canvas ref={canvasRef} style={{ display: "none" }} />
            <div>
                <h2>Detected Barcodes:</h2>
                <ul>
                    {detectedCodes.map((code, index) => (
                        <li key={index}>{code}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default BarcodeScanner;
