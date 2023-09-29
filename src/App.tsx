
import './App.css';

import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home/Home.tsx"; // Import your Home component
import {BrowserRouter, Routes, Route, } from "react-router-dom";

import styles from './style.tsx';
import Send from "./components/Send.tsx";
import Swap from "./components/Swap.tsx";
import Buy from "./components/Buy.tsx";
import Buy2 from "./components/Buy2.tsx";
import Login from "./components/Login.tsx";
import CreateWallet from "./components/CreateWallet.tsx";
import Camera from "./components/Camera.tsx";
import BarcodeScanner from "./components/BarcodeScanner.tsx";
import Profile from "./components/Profile.tsx";
import MobileNav from "./components/MobileNav.tsx";
import Get from "./components/Get.tsx";
import Test from "./components/Test.tsx";
function App() {
    return (
        <BrowserRouter>

          <Test/>
        </BrowserRouter>
    );
}

export default App;
