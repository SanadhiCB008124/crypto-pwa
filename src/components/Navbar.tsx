
import logo from "../assets/coin.jpg";

import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

import {Link} from "react-router-dom";
import {useState} from "react";


export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="BitWallet" className="w-[39px] h-[39px] rounded-full " />

            <ul className="list-none sm:flex hidden justify-end items-center flex-1 space-x-4">

                    <li

                        className="font-poppins text-primary-500  font-small cursor-pointer text-[16px]  space-x-4"

                    >
                        <Link to="/profile" >
                            <label>Profile</label>
                        </Link>


                    </li>

                <li

                    className="font-poppins text-primary-500  font-small cursor-pointer text-[16px]  space-x-4"

                >
                    <Link to="/home" >
                        <label>Home</label>
                    </Link>


                </li>
                <li  className="font-poppins text-primary-500  font-small cursor-pointer text-[16px]
                                ">My wallet</li>
                <li  className="font-poppins text-primary-500 font-small cursor-pointer text-[16px]
                                ">Notifications</li>
                <li  className="font-poppins text-primary-500 font-small cursor-pointer text-[16px]
                                ">Settings</li>

            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                />

                <div
                    className={`${
                        !toggle ? "hidden" : "flex"
                    } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col m-3">

                            <li
                                className="font-poppins text-black font-medium cursor-pointer text-[16px] pr-4 pb-4 ml-0
                                "

                            ><Link to="/profile" >
                                <label>Profile</label>
                            </Link>

                            </li>

                        <li
                            className="font-poppins text-black font-medium cursor-pointer text-[16px] pr-4 pb-4 ml-0
                              "><Link to="/home" >
                            <label>Home</label>
                        </Link>

                        </li>
                        <li  className="font-poppins text-black  font-medium cursor-pointer text-[16px] pr-4 pb-4 ml-0
                                ">My wallet</li>
                        <li  className="font-poppins text-black  font-medium cursor-pointer text-[16px] pr-4 pb-4 ml-0
                                ">Notifications</li>
                        <li  className="font-poppins text-black  font-medium cursor-pointer text-[16px] pr-4 pb-4 ml-0
                                ">Settings</li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}


