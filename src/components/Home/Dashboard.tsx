import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <main className="">

            <div className="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-primary">
                <div className="grid grid-cols-12 gap-6">
                    <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                        <div className="col-span-12 mt-8">
                            <div className="flex items-center h-10 intro-y">
                                <h2 className="mr-5 text-lg font-medium truncate">Dashboard</h2>
                            </div>
                            <div
                                className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y"

                            >
                                <div className="p-5 text-white rounded "
                                     style={{
                                         background:' linear-gradient(0deg, rgba(28,17,29,1) 0%, rgba(49,16,73,1) 91%)'
                                     }}
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
                                    <div className="p-5 text-white rounded "
                                    style={{
                                        background:' linear-gradient(0deg, rgba(28,17,29,1) 0%, rgba(49,16,73,1) 91%)'
  }}
                                    >
                                        <div className="flex justify-between ">

                                            <div className="mt-3 text-3xl leading-8 text-white">Bitcoin</div>

                                            <div className="mt-3 text-3xl text-base font-bold leading-8">$ 6, 200.34</div>

                                        </div>
                                        <div className="ml-2 w-full flex-1">
                                            <div>
                                                    <div className="mt-1 text-base ">ETH</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a
                                    className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y "
                                    href="#"
                                >
                                    <div className="p-5 text-white rounded "
                                         style={{
                                             background:' linear-gradient(0deg, rgba(28,17,29,1) 0%, rgba(49,16,73,1) 91%)'
                                         }}
                                    >
                                        <div className="flex justify-between ">

                                            <div className="mt-3 text-3xl  leading-8 text-white">Ethereum</div>

                                            <div className="mt-3 text-3xl text-base font-bold leading-8">$ 2,123.02</div>

                                        </div>
                                        <div className="ml-2 w-full flex-1">
                                            <div>
                                                <div className="mt-1 text-base ">BTC</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>

                        {/*}  <div className="col-span-12 mt-5">
                            <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                                <div className="bg-white p-4 shadow-lg rounded-lg">
                                    <h1 className="font-bold text-base">Recent Transactions</h1>
                                    <div className="mt-4">
                                        <div className="flex flex-col">
                                            <div className="-my-2 overflow-x-auto">
                                                <div className="py-2 align-middle inline-block min-w-full">
                                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                                        <table className="min-w-full divide-y divide-gray-200">
                                                            <thead>
                                                            <tr>
                                                                <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                    <div className="flex cursor-pointer">
                                                                        <span className="mr-2">Transaction</span>
                                                                    </div>
                                                                </th>
                                                                <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                    <div className="flex cursor-pointer">
                                                                        <span className="mr-2">Stock</span>
                                                                    </div>
                                                                </th>
                                                                <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                    <div className="flex cursor-pointer">
                                                                        <span className="mr-2">STATUS</span>
                                                                    </div>
                                                                </th>
                                                                <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                    <div className="flex cursor-pointer">
                                                                        <span className="mr-2">ACTION</span>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody className="bg-white divide-y divide-gray-200">
                                                            <tr>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>Apple MacBook Pro 13</p>
                                                                    <p className="text-xs text-gray-400">PC & Laptop</p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>77</p>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex text-green-500">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                        </svg>
                                                                        <p>Active</p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div className="flex space-x-4">
                                                                        <a href="#" className="text-blue-500 hover:text-blue-600">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                            </svg>
                                                                            <p>Edit</p>
                                                                        </a>
                                                                        <a href="#" className="text-red-500 hover:text-red-600">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                            </svg>
                                                                            <p>Delete</p>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Dashboard;
