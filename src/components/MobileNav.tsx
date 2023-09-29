import React from "react";
import { Link,useNavigate } from 'react-router-dom';

const MobileNav: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="mobile-nav flex flex-col items-center space-y-4 mb-4  md:flex-row md:justify-center ">

            <div onClick={() => {
                navigate("/");
            }}>

            </div>
            <div className="flex space-x-8">
                <button className="text-white bg-primary">
                    <Link to="/Home" >
                        <svg width="40px" height="50px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="#508f81" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 18H9" stroke="#508f81" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                   <label>Home</label>
                    </Link>
                </button>
                <button className=" text-white bg-primary">
                    <Link to="/buy" >
                        <svg width="40px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#508f81"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 8V7.2C18 6.0799 18 5.51984 17.782 5.09202C17.5903 4.71569 17.2843 4.40973 16.908 4.21799C16.4802 4 15.9201 4 14.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V8M21 12H19C17.8954 12 17 12.8954 17 14C17 15.1046 17.8954 16 19 16H21M3 8V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H3Z" stroke="#508f81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <label>Buy</label>
                    </Link>
                </button>

                {/**  <button className=" text-white bg-primary">
                    <Link to="/SendViaQr" >
                       Send Via QR
                    </Link>
                </button>
                <button className=" text-white bg-primary">
                    <Link to="/BarcodeScanner" >
                       Scanner
                    </Link>
                </button>*/}

                <button className="text-white bg-primary ">
                    <Link to="/Send" >
                        <svg width="40px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#508f81"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967L18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303C18.2374 10.8232 17.7626 10.8232 17.4697 10.5303L12.75 5.81066L12.75 20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20L11.25 5.81066L6.53033 10.5303C6.23744 10.8232 5.76256 10.8232 5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967L11.4697 3.46967Z" fill="#508f81"></path> </g></svg>
                   <label>Send</label>
                    </Link>
                </button>
                <button className=" text-white bg-primary  ">
                    <Link to="/swap" >
                        <svg width="40px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M23 15.9697C23 19.8397 19.87 22.9697 16 22.9697L17.05 21.2197" stroke="#508f81" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M1 7.96973C1 4.09973 4.13 0.969727 8 0.969727L6.95 2.71973" stroke="#508f81" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.61914 13.0703H9.42914C10.0491 13.0703 10.5591 13.6303 10.5591 14.2003C10.5591 14.8203 10.0591 15.3303 9.42914 15.3303H6.61914V13.0703Z" stroke="#508f81" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.61914 15.3301H9.83914C10.5491 15.3301 11.1291 15.8301 11.1291 16.4601C11.1291 17.0801 10.5491 17.5901 9.83914 17.5901H6.61914V15.3301Z" stroke="#508f81" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.41992 17.5801V18.7001" stroke="#508f81" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.41992 11.9502V13.0702" stroke="#508f81" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.8498 15.3302C14.8498 18.7402 12.0898 21.5002 8.67977 21.5002C5.26977 21.5002 2.50977 18.7402 2.50977 15.3302C2.50977 11.9202 5.26977 9.16016 8.67977 9.16016C8.83977 9.16016 8.98977 9.17018 9.15977 9.18018C12.1898 9.41018 14.6098 11.8302 14.8398 14.8602C14.8398 15.0102 14.8498 15.1602 14.8498 15.3302Z" stroke="#508f81" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21.5002 8.66998C21.5002 12.08 18.7402 14.84 15.3302 14.84H14.8402C14.6102 11.81 12.1902 9.38997 9.16016 9.15997V8.66998C9.16016 5.25998 11.9202 2.5 15.3302 2.5C18.7402 2.5 21.5002 5.25998 21.5002 8.66998Z" stroke="#508f81" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
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

