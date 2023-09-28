
import styles from "../style.tsx";
import {useEffect, useState} from "react";
import QR from "../assets/QR.png"


declare class BarcodeDetector {
    constructor(options?: BarcodeDetectorOptions);

    static getSupportedFormats(): Promise<string[]>;

    detect(image: HTMLElement): Promise<BarcodeDetectionResult[]>;
}

interface BarcodeDetectorOptions {
    formats: string[];
}

interface BarcodeDetectionResult {
    rawValue: string;
}
function SendViaQR() {
    const [recipientAddress, setRecipientAddress] = useState('');

    useEffect(() => {
        async function scanQRCode() {
            if (!('BarcodeDetector' in window)) {
                console.log('BarcodeDetector is not supported by this browser');
                return;
            }

            try {
                const barcodeDetector = new BarcodeDetector({ formats: ['qr_code', 'ean_13', 'code_128'] });

                const imageEl = document.getElementById('image'); // Replace 'image' with the actual ID of your image element.

                if (imageEl) {
                    const barcodes = await barcodeDetector.detect(imageEl);
                    if (barcodes.length > 0) {
                        const barcodeData = barcodes[0].rawValue;
                        setRecipientAddress(barcodeData); // Update the recipient address state
                    }
                }
            } catch (err) {
                console.error('Error scanning barcode:', err);
            }
        }

        scanQRCode();
    }, []);

    return (
        <div>
            <div className="relative min-h-screen grid bg-primary">
                <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
                    <div
                        className="relative w-full bg-primary h-full  flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover "

                    >
                        <div className="lg:text-left text-center">
                            <div className="flex items-center justify-center">
                                <div className="bg-primary flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                                    <h2 className={styles.heading1}>
                                        Send Ethereum
                                    </h2>
                                    <form className="flex flex-col space-y-8 mt-10">
                                        <label className="font-bold text-lg text-white">
                                            Send To:
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Send to"
                                            className="border rounded-lg py-3 px-3 mt-4 bg-black border-primary-500 placeholder-white-500 text-white"
                                        />
                                        <label className="font-bold text-lg text-white">Amount</label>
                                        <input
                                            type="text"
                                            placeholder="amount"
                                            className="border rounded-lg py-3 px-3 bg-black border-primary-500 placeholder-white-500 text-white"
                                        />
                                        <button
                                            className="border border-primary-500 bg-green-950 text-white rounded-lg py-3 font-semibold"
                                            // onClick={onSubmit} // You can add your form submission logic here
                                        >
                                            Continue
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img id="image" src={QR} alt="Barcode image" />
            </div>
            <div>
                <p>Recipient Address: {recipientAddress}</p>
            </div>
        </div>
    );
}

export default SendViaQR;
