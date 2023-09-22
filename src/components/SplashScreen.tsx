
import image from "../assets/splash4.jpg";
import {Link} from "react-router-dom";
import React, {useState} from "react";

const splashScreen:React.FC=()=>{

    const [showSplash, setShowSplash] = useState(true);

    const hideSplash = () => {
        setShowSplash(false);
    };
    return (


                <section>
                    <div className="relative min-h-screen grid bg-primary">
                        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
                            <div
                                className="relative w-full bg-primary h-full  flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover "
                                style={{
                                    backgroundImage: `url(${image})`,
                                }}
                            >
                                <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                                    <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                                        <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
                                            BIT WALLET
                                        </h1>
                                        <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                                            Space: The Timeless Infinity
                                        </h2>
                                        <button
                                            className=" mt-2 bg-black hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                                            onClick={hideSplash} // Hide the splash on button click
                                        >
                                            <Link to="/createWallet">
                                                Create Your Wallet
                                            </Link>
                                        </button>
                                        <button
                                            className=" mt-2 bg-black hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                                            onClick={hideSplash} // Hide the splash on button click
                                        >
                                            <Link to="/login">
                                                Login
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

    );
}

export default splashScreen;