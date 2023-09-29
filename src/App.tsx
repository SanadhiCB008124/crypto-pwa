
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
import Card from "./components/Card.tsx";
import Recieve from "./components/Recieve.tsx";
function App() {
    return (
        <BrowserRouter>

            <div className="bg-primary w-full overflow-hidden  ">
                <div className={`${styles.paddingX} ${styles.flexCenter}  `}>

                    <div className={`${styles.boxWidth} `}>
                        <Navbar/>
                    </div>

                </div>
                <div>
                    <MobileNav/>
                </div>


                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route path="/send" element={<Send />} />
                            <Route path="/swap" element={<Swap />} />
                            <Route path="/buy" element={<Buy />} />
                            <Route path="/get" element={<Get/>} />
                            <Route path="/login" element={<Login/>} />
                            <Route path="/createWallet" element={<CreateWallet/>} />
                            <Route path="/camera" element={<Camera/>} />
                            <Route path="/barcodescanner" element={<BarcodeScanner/>} />
                            <Route path="/profile" element={<Profile/>} />
                            <Route path="/card" element={<Card/>} />
                            <Route path="/buy2" element={<Buy2/>} />
                            <Route path="/recieve" element={<Recieve/>} />



                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
