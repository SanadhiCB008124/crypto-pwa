import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase'; // Import the initialized Firestore instance

import { Grid } from '@mui/material';
import SearchBar from './SearchBar';


type Crypto = {
    id: string;
    name: string; // Add the 'name' property here (and other properties you have)
    symbol: string;
    price: number;
    image: string;

};
const Buy = () => {
    const [cryptos, setCryptos] = useState<Crypto[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'cryptocurrencies'));
                const cryptoData: Crypto[] = [];

                querySnapshot.forEach((doc) => {
                    const data = doc.data() as Crypto; // Cast data as Crypto type

                    cryptoData.push({
                        ...data, // Remove 'id' from here
                    });
                });


          setCryptos(cryptoData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts


    return (

    <div className=" bg-primary">
        <div className="ml-3 mr-3">
            <SearchBar />
        </div>

            <Grid container spacing={2} columns={16}>
                <Grid xs={8}>
                    <div className='m-10'>
                    </div>
                </Grid>
                <Grid xs={8}>
      <div className="dropdown dropdown-bottom dropdown-end  absolute  mb-10 mr-4 right-0">
                        <label tabIndex={0} className="btn m-10 bg-primary-300  text-white hover:bg-white hover:text-primary-300">
                            Currency
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow text-black bg-white rounded-box w-52"
                        >
                            <li>
                                <a>USD</a>
                            </li>
                            <li>
                                <a>AUD</a>
                            </li>
                        </ul>
                    </div>
                </Grid>
            </Grid>
    <div className='m-10'>
      <h2 className="text-primary-500">Cryptocurrencies</h2>
      <ul role="list" className="divide-ymt-10">
        {cryptos.map((crypto) => (
          <li key={crypto.id} className="flex justify-between gap-x-6 py-5">
<div className="flex min-w-0 gap-x-4">
            <img src={crypto.image} alt={crypto.name} className="h-12 w-12 flex-none rounded-full bg-primary"/>
            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-white">
                                    {crypto.name}
                                </p>
                                <p> {crypto.symbol}</p>
                            </div>
                        </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-white">$ {crypto.price}</p>
                          
                        </div>
            
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Buy;
