

import bgImg from "../assets/splash4.jpg"
import { Link} from 'react-router-dom';

function Test() {

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
                            <div className="bg-primary flex flex-col w-80 border-2 border-primary-500 rounded-3xl px-8 py-10">

                                <form className="flex flex-col space-y-8 mt-10">
                                    <details className="dropdown mb-24">
                                        <summary className="m-1  bg-black  py-2 px-4 rounded-2xl ">Currency</summary>
                                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-black rounded-box w-52">
                                            <li><a className="hover:bg-white hover:text-black">USD</a></li>
                                            <li><a className="hover:bg-white hover:text-black">EURO</a></li>
                                            <li><a className="hover:bg-white hover:text-black">YEN</a></li>
                                            <li><a className="hover:bg-white hover:text-black">EUD</a></li>


                                        </ul>
                                    </details>
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


                                    <input
                                        type="text"
                                        placeholder="amount"
                                        className="border rounded-lg py-3 px-3 bg-black border-primary-500 placeholder-white-500 text-white"
                                    />
                                    <button
                                        className="border border-primary-500 bg-green-950 text-white rounded-lg py-3 font-semibold"
                                        // onClick={onSubmit} // You can add your form submission logic here
                                    >
                                        Continue
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>


    );
}

export default Test;
