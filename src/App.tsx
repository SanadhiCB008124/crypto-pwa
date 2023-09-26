import React, { useState, useEffect, useRef } from 'react';

function App() {
    const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
    const [galleryImage, setGalleryImage] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const initCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                setCameraStream(stream);
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };

        initCamera();
    }, []);

    const capturePhoto = () => {
        if (cameraStream && videoRef.current) {
            const videoElement = videoRef.current;
            const canvas = document.createElement('canvas');
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
            const context = canvas.getContext('2d');

            if (context) {
                context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

                // Convert the canvas content to an image or base64 data
                const capturedImage = canvas.toDataURL('image/png');

                // Do something with the captured image (e.g., display it)
                setGalleryImage(capturedImage);
            }
        }
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && typeof e.target.result === 'string') {
                    const uploadedImage = e.target.result;
                    setGalleryImage(uploadedImage);
                }
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <div>
            <h1>Profile Page</h1>
            {cameraStream && <video autoPlay ref={videoRef} />}
            <button onClick={capturePhoto}>Capture Photo</button>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
            />
            {galleryImage && (
                <div>
                    <h2>Preview:</h2>
                    <img src={galleryImage} alt="Uploaded" />
                </div>
            )}
        </div>
    );
}

export default App;
