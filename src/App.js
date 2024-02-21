import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { Navigation, Section, Product } from './components/index.js';


// ABIs
import Dappazon from './abis/Dappazon.json'

// Config
import config from './config.json'

function App() {

  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);


  // const loadBlockchainData = async () => {
  //   //creats connection to the chain
  //   const provider = new ethers.providers.Web3Provider(window.ethereum)
  //   setProvider(provider);

  //   //Network on chain

  //   const network = await provider.getNetwork();
  //   console.log(network);

  //   const dappazon = new ethers.Contract(("0x5FbDB2315678afecb367f032d93F642f64180aa3"), provider, Dappazon
  //   )
  // }

  // useEffect(() => {
  //   loadBlockchainData();
  // }, []);

  return (
    <div className=''>
      <Navigation account={account} setAccount={account} />
      <h2 className=''>Welcome to Dappazon</h2>

    </div>
  );
}

export default App;
