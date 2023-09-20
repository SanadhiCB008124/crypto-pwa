
import bgImg from "../assets/Ethereum.png";
import styles from "../style.tsx";

function Swap() {
    return (
        <div>
            <div className="relative min-h-screen grid bg-black">
                <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">

                    <div
                        className="relative sm:w-1/2 xl:w-3/5 bg-primary h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative"
                        style={{
                            backgroundImage: `url(${bgImg})`,
                            backgroundSize: "50% auto",
                            backgroundPosition: "left center"


                        }}
                    >


                        <div className="absolute bg-primary opacity-25 inset-0 z-0"></div>
                        <div className="w-full lg:max-w-2xl md:max-w-md z-10 items-center text-center">
                            <div className="font-bold leading-tight mb-6 mx-auto w-full content-center items-center"></div>
                        </div>
                    </div>

                    <div className="md:flex md:items-center bg-primary md:justify-left w-full sm:w-auto md:h-full md:w-1/2 xl:w-1/2 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">

                        <div className="max-w-xl w-full space-y-12">
                            <h2 className={styles.heading1}>
                                Swap
                            </h2>
                            <div className="lg:text-left text-center">
                                <div className="flex items-center justify-center">
                                    <div className="bg-primary flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                                        <form className="flex flex-col space-y-8 mt-10">
                                            <label className="font-bold text-lg text-white">
                                                Send To:
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Send to"
                                                className="border rounded-lg py-3 px-3 mt-4 bg-black border-purple-600 placeholder-white-500 text-white"
                                            />
                                            <label className="font-bold text-lg text-white">Get</label>
                                            <input
                                                type="text"
                                                placeholder="ETH"
                                                className="border rounded-lg py-3 px-3 bg-black border-purple-600 placeholder-white-500 text-white"
                                            />

                                            <button
                                                className="border border-indigo-600 bg-purple-400 text-white rounded-lg py-3 font-semibold"
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
            </div>
        </div>
    );
}

export default Swap;
