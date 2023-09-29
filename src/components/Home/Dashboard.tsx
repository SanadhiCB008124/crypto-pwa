import React from 'react';
import  bitcoin from "../../assets/ethereum.png";
import MobileNav from "../MobileNav.tsx";
const Dashboard: React.FC = () => {
    return (


            <div className="">

                <div className={"flex flex-row justify-center"}>
                    <MobileNav/>
                </div>


                    <div className="">
                        <div className="m-10">

                            <div
                                className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y"

                            >
                                <div className="p-5 text-primary-500 rounded bg-black"

                                >
                                    <div className="mt-3 text-3xl text-base font-bold leading-8">Your Wallet Balance</div>
                                    <div className="flex justify-between ">

                                        <div className="mt-3 text-3xl leading-8 text-white">$ 6, 200.34</div>


                                    </div>

                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-6 mt-5">
                                <a
                                    className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y "
                                    href="#"
                                >
                                    <div className="p-5 text-white rounded bg-black"

                                    >
                                        <div className="flex justify-between ">
                                            <img src={bitcoin} alt={bitcoin} className="h-12 w-12 flex-none rounded-full bg-primary"/>
                                            <div className="mt-3 text-3xl leading-8 text-white">Bitcoin</div>

                                            <div className="mt-3 text-3xl text-base font-bold leading-8">$ 6, 200.34</div>

                                        </div>
                                        <div className="ml-2 w-full flex-1">
                                            <div>
                                                    <div className="mt-1 text-base ">BTC</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a
                                    className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y "
                                    href="#"
                                >
                                    <div className="p-5 text-white rounded bg-black "

                                    >
                                        <div className="flex justify-between ">
                                            <img src={bitcoin} alt={bitcoin} className="h-12 w-12 flex-none rounded-full bg-primary"/>

                                            <div className="mt-3 text-3xl  leading-8 text-white">Ethereum</div>

                                            <div className="mt-3 text-3xl text-base font-bold leading-8">$ 2,123.02</div>

                                        </div>
                                        <div className="ml-2 w-full flex-1">
                                            <div>
                                                <div className="mt-1 text-base ">ETH</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                    </div>




    );
};

export default Dashboard;
