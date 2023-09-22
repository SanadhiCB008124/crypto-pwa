import React from "react";
import { Link,useNavigate } from 'react-router-dom';
import SidePanel from "./Home/SidePanel.tsx";
import home from "../assets/home-svgrepo-com.svg"

const MobileNav: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center space-y-4 mb-4 mt-10 md:flex-row md:justify-center ">

            <div onClick={() => {
                navigate("/");
            }}>

            </div>
            <div className="flex space-x-4">
                <button className="text-white bg-primary">
                    <Link to="/Home" >
                        <svg width="87px" height="57px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="#bb68b4" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 18H9" stroke="#bb68b4" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                   <label>Home</label>
                    </Link>
                </button>
                <button className=" text-white bg-primary">
                    <Link to="/buy" >
                        <svg fill="#bb68b4" height="57px" width="87px" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 238" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M130.6,70.7l0.1-19c5.4,0,22.3-1.6,22.2,9.6C152.9,72.1,136,70.7,130.6,70.7z M157.2,90.9L157.2,90.9 c0-12.3-20.2-10.5-26.6-10.6l-0.1,21C137,101.3,157.2,102.7,157.2,90.9z M59.8,77.1c0-41.1,32.9-74.5,74-74.5 c41.1,0,74.2,33.2,74.2,74.2c0,41.1-33.4,74.2-74.2,74.2S59.8,117.9,59.8,77.1z M115.1,73c-0.3,0-0.7,0-1,0L114,98 c-0.2,1.2-0.9,3.1-3.6,3.1c0.1,0.1-6.9,0-6.9,0l-1.9,11.4l12.4,0c2.3,0,4.6,0.1,6.8,0.1l-0.1,15.8l9.5,0l0.1-15.6 c2.6,0.1,5.1,0.1,7.6,0.1l-0.1,15.6l9.5,0l0.1-15.8c16-0.9,27.2-4.9,28.7-19.9c1.2-12.1-4.5-17.5-13.6-19.7c5.5-2.8,9-7.7,8.2-16h0 c-1-11.3-10.8-15.1-23-16.2l0.1-15.6l-9.5,0l-0.1,15.2c-2.5,0-5.1,0-7.6,0.1l0.1-15.3l-9.5,0L121,40.8c-2.1,0-4.1,0.1-6.1,0.1l0,0 l-13.1-0.1l0,10.2c0,0,7-0.1,6.9,0c3.9,0,5.1,2.3,5.5,4.2L114.1,73C114.4,73,114.7,73,115.1,73z M107.9,220.5h43 c10.6,0,20.5-4.9,27.1-11.8l57.2-57.2c4.5-4.5,4.7-12.1,0-16.8c-4.4-4.4-11.8-4.5-16.6,0.3L183.5,170c0.8,2.2,1.4,4.9,1.3,7.2 c0,5.2-2,10.2-5.7,13.9s-8.6,5.8-13.9,5.7l-49.6,0.1c-2.2,0-4-1.7-4-4c0-2.2,1.7-4,3.8-3.8h49.8c6.5,0,11.8-5.3,11.8-11.8 c0-6.5-5.3-11.8-11.8-11.8l-61.9-0.2c-10.3,0-19.5,4.2-26.2,10.9l-60,61.8h65.9l10.7-11.7C97.4,222.6,102.4,220.5,107.9,220.5z"></path> </g></svg>
                        <label>Buy</label>
                    </Link>
                </button>
                {/*}  <button className=" text-white bg-primary">
                    <Link to="/login" >
                       login
                    </Link>
                </button>*/}
                <button className="text-white bg-primary ">
                    <Link to="/Send" >
                        <svg width="87px" height="57px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12" stroke="#bb68b4" stroke-width="1.5"></path> <path d="M2 14C2 11.1997 2 9.79961 2.54497 8.73005C3.02433 7.78924 3.78924 7.02433 4.73005 6.54497C5.79961 6 7.19974 6 10 6H14C16.8003 6 18.2004 6 19.27 6.54497C20.2108 7.02433 20.9757 7.78924 21.455 8.73005C22 9.79961 22 11.1997 22 14C22 16.8003 22 18.2004 21.455 19.27C20.9757 20.2108 20.2108 20.9757 19.27 21.455C18.2004 22 16.8003 22 14 22H10C7.19974 22 5.79961 22 4.73005 21.455C3.78924 20.9757 3.02433 20.2108 2.54497 19.27C2 18.2004 2 16.8003 2 14Z" stroke="#bb68b4" stroke-width="1.5"></path> <path d="M12 17L12 11M12 11L14.5 13.5M12 11L9.5 13.5" stroke="#bb68b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                   <label>Send</label>
                    </Link>
                </button>
                <button className=" text-white bg-primary ">
                    <Link to="/swap" >
                        <svg width="87px" height="57px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M23 15.9697C23 19.8397 19.87 22.9697 16 22.9697L17.05 21.2197" stroke="#bb68b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M1 7.96973C1 4.09973 4.13 0.969727 8 0.969727L6.95 2.71973" stroke="#bb68b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.61914 13.0703H9.42914C10.0491 13.0703 10.5591 13.6303 10.5591 14.2003C10.5591 14.8203 10.0591 15.3303 9.42914 15.3303H6.61914V13.0703Z" stroke="#bb68b4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.61914 15.3301H9.83914C10.5491 15.3301 11.1291 15.8301 11.1291 16.4601C11.1291 17.0801 10.5491 17.5901 9.83914 17.5901H6.61914V15.3301Z" stroke="#bb68b4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.41992 17.5801V18.7001" stroke="#bb68b4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.41992 11.9502V13.0702" stroke="#bb68b4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.8498 15.3302C14.8498 18.7402 12.0898 21.5002 8.67977 21.5002C5.26977 21.5002 2.50977 18.7402 2.50977 15.3302C2.50977 11.9202 5.26977 9.16016 8.67977 9.16016C8.83977 9.16016 8.98977 9.17018 9.15977 9.18018C12.1898 9.41018 14.6098 11.8302 14.8398 14.8602C14.8398 15.0102 14.8498 15.1602 14.8498 15.3302Z" stroke="#bb68b4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21.5002 8.66998C21.5002 12.08 18.7402 14.84 15.3302 14.84H14.8402C14.6102 11.81 12.1902 9.38997 9.16016 9.15997V8.66998C9.16016 5.25998 11.9202 2.5 15.3302 2.5C18.7402 2.5 21.5002 5.25998 21.5002 8.66998Z" stroke="#bb68b4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                   <label>Swap</label>
                    </Link>
                </button>
                {/*<button className="text-white bg-primary  ">
                    <Link to="/receive" >
                        <svg  width="87px" height="57px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12" stroke="#bb68b4" stroke-width="1.5"></path> <path d="M2 14C2 11.1997 2 9.79961 2.54497 8.73005C3.02433 7.78924 3.78924 7.02433 4.73005 6.54497C5.79961 6 7.19974 6 10 6H14C16.8003 6 18.2004 6 19.27 6.54497C20.2108 7.02433 20.9757 7.78924 21.455 8.73005C22 9.79961 22 11.1997 22 14C22 16.8003 22 18.2004 21.455 19.27C20.9757 20.2108 20.2108 20.9757 19.27 21.455C18.2004 22 16.8003 22 14 22H10C7.19974 22 5.79961 22 4.73005 21.455C3.78924 20.9757 3.02433 20.2108 2.54497 19.27C2 18.2004 2 16.8003 2 14Z" stroke="#bb68b4" stroke-width="1.5"></path> <path d="M12 11L12 17M12 17L14.5 14.5M12 17L9.5 14.5" stroke="#bb68b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  <label>Get</label>
                    </Link>
                </button>*/}
            </div>

        </div>
    );
}

export default MobileNav;

