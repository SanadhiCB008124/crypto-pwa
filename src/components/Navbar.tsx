import {useState} from "react";
import logo from "../assets/coin.jpg";

import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { navLinks2 } from "../constants";


export default function Navbar() {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="BitWallet" className="w-[39px] h-[39px] rounded-full " />

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks2.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px]  ${
                            active === nav.title ? "text-primary-500" : "text-primary-500"
                        } ${index === navLinks2.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
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
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks2.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                    active === nav.title ? "text-black" : "text-black"
                                } ${index === navLinks2.length - 1 ? "mb-0" : "mb-4"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}


