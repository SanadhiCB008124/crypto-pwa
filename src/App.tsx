import  { useState } from 'react';
import './App.css';

const constraints = {
    video: {
        width: {
            min: 1280,
            ideal: 1920,
            max: 2560,
        },
        height: {
            min: 720,
            ideal: 1080,
            max: 1440,
        },
        facingMode: 'user',
    },
};

function App() {
    const [videoStream, setVideoStream] = useState<MediaStream | null>(null);

    const initCamera = async () => {
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoCam = devices.find((device) => device.kind === 'videoinput');

            if (videoCam) {
                const updatedConstraints = {
                    ...constraints,
                    deviceId: {
                        exact: videoCam.deviceId,
                    },
                };

                const stream = await navigator.mediaDevices.getUserMedia(updatedConstraints);
                setVideoStream(stream);
            } else {
                alert('No video camera found.');
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
            alert('Error accessing camera. Please check your settings.');
        }
    };

    const startCamera = () => {
        if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
            initCamera();
        } else {
            alert('Media features are not available on this device.');
        }
    };

    return (
        <div>
            <button onClick={startCamera}>Start Camera</button>
            {videoStream && (
                <video
                    style={{ width: 1280, height: 720 }}
                    autoPlay
                    ref={(videoElement) => {
                        if (videoElement) {
                            videoElement.srcObject = videoStream;
                        }
                    }}
                ></video>
            )}
        </div>
    );
}

export default App;
