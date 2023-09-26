import './App.css';
import styles from './style.tsx';

import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home/Home.tsx"; // Import your Home component
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Send from "./components/Send.tsx";
import Swap from "./components/Swap.tsx";
import Buy from "./components/Buy.tsx";
import Recieve from "./components/Recieve.tsx";

import MobileNav from "./components/MobileNav.tsx";
import Login from "./components/Login.tsx";
import CreateWallet from "./components/CreateWallet.tsx";


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
        facingMode: 'user'
    },
};

function App() {
    let isMediaAvailable: string = ":( Media features are not available";
    if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
        isMediaAvailable = ":) Media Capabilities are available";
        // Requesting for Permission
        navigator.mediaDevices.getUserMedia({ video: true });

        const initCamera = async () => {
            const devices = await navigator.mediaDevices.enumerateDevices();
            debugger;
            const videoCam = devices[1];
            const updatedConstraints = {
                ...constraints,
                deviceId: {
                    exact: videoCam.deviceId,
                },
            };
            //Get the Stream Object
            const videoStream = await navigator.mediaDevices.getUserMedia(
                updatedConstraints
            );
            //Set the stream to the video element on the page
            setTimeout(function () {
                alert("Setting video stream");
                const videoElement: any = document.querySelector("video");
                videoElement.srcObject = videoStream;
            }, 1500);
        };
        initCamera();
    }
    return (
        <video style={{ width: 1280, height: 720 }} autoPlay></video>


    );
}

export default App;
