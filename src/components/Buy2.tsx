import React from "react";
import { Link } from 'react-router-dom';
import bgImg from "../assets/splash4.jpg";

const Buy2: React.FC = () => {

    return (
        <div
            className=" w-full bg-primary h-full  flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover "
            style={{
                backgroundImage: `url(${bgImg})`
            }}
        >
            {/**}   <MobileNav/>**/}
            <div
                className=" w-full h-full  flex-auto items-center justify-center p-10 overflow-hidden text-white  ">
                <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">


                    <div className="lg:text-left text-center">
                        <div className="flex items-center justify-center">

                <div className="relative border-2 border-primary-500 px-4 py-10 bg-primary mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="flex items-center space-x-5">
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
                                <div className="flex flex-row justify-center">
                                    <details className="dropdown mb-24">
                                        <summary className="m-1  bg-black  py-2 px-4 rounded-2xl ">Currency</summary>
                                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-black rounded-box w-52">
                                            <li><a className="hover:bg-white hover:text-black">USD</a></li>
                                            <li><a className="hover:bg-white hover:text-black">EURO</a></li>
                                            <li><a className="hover:bg-white hover:text-black">YEN</a></li>
                                            <li><a className="hover:bg-white hover:text-black">EUD</a></li>


                                        </ul>
                                    </details>
                                </div>
                                <div className="flex flex-row justify-center">
                                    <h2>Ethereum</h2>
                                </div>
                                <div className="flex flex-row justify-center mb-20">
                                    <input
                                        type="text"
                                        placeholder="amount"
                                        className="border rounded-lg py-3 px-3 bg-black border-primary-500 placeholder-white-500 text-white"
                                    />

                                </div>


                                    <details className="dropdown mb-2 w-full ">
                                        <summary className="m-1 bg-black  py-2 px-4 rounded-2xl ">Select Payment Method</summary>
                                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-black rounded-box w-52">
                                            <Link to="/card" >
                                            <li><a className="hover:bg-white hover:text-black">MasterCard</a></li>
                                            </Link>
                                            <Link to="/card" >
                                            <li><a className="hover:bg-white hover:text-black">Debit/Credit Card</a></li>
                                            </Link>
                                            <li><a className="hover:bg-white hover:text-black">PayPal</a></li>
                                            <li><a className="hover:bg-white hover:text-black">Apple Pay</a></li>
                                        </ul>
                                    </details>



                                </div>

                            </div>



                        </div>

                        <button
                            className="border border-primary-500 w-full bg-green-950 text-white rounded-lg py-3 font-semibold"
                            // onClick={onSubmit} // You can add your form submission logic here
                        >
                            Continue
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    );
};

export default Buy2;