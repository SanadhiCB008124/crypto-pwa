
import bgImg from "../assets/Ethereum.png";
import styles from "../style.tsx";
import bgImg2 from "../assets/bg3.jpg"


function Swap() {
    return (
        <div>
            <div className="relative min-h-screen grid bg-black">
                <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">

                    <div
                        className="relative w-full bg-primary h-full  flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover "
                        style={{
                            backgroundImage: `url(${bgImg2})`
                        }}
                    >


                        <div className="lg:text-left text-center">
                            <div className="flex items-center justify-center">
                                <div className="bg-primary flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                                    <h2 className={styles.heading1}>
                                        Swap
                                    </h2>
                                    <form className="flex flex-col space-y-8 mt-10">
                                        <label className="font-bold text-lg text-white">
                                            From :
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Send to"
                                            className="border rounded-lg py-3 px-3 mt-4 bg-black border-purple-600 placeholder-white-500 text-white"
                                        />
                                        <label className="font-bold text-lg text-white">To:</label>
                                        <input
                                            type="text"
                                            placeholder="amount"
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
    );
}

export default Swap;
