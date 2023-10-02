import React from 'react';
import  eth from "../../assets/ethereum.png";
import  bitcoin from "../../assets/BTC.png";

const Dashboard: React.FC = () => {
    return (


        <div
            className=" w-full bg-primary h-full  gap-6 flex flex-col  justify-center p-10 overflow-hidden text-white  "
        >

                                <a
                                    className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg  "
                                    href="#"
                                >

                                    <div className="p-5 text-primary-500 rounded bg-black"

                                    >
                                        <div className="mt-3 text-3xl text-base font-bold text-center leading-8">Your Wallet Balance</div>
                                        <div className="flex justify-center ">

                                            <div className="mt-3 text-3xl leading-8  text-white">$ 6, 200.34</div>


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
                        <img src={bitcoin} alt={bitcoin} className="h-9 w-9 flex-none rounded-full bg-primary"/>

                        <div className="mt-3 text-1xl   leading-8 text-white">
                            Bitcoin</div>

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
                                            <img src={eth} alt={eth} className="h-9 w-12 flex-none rounded-full bg-primary"/>

                                            <div className="mt-3 text-1xl  leading-8 text-white">Ethereum</div>

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





    );
};

export default Dashboard;
