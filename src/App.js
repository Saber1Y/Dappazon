import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { Navigation, Section, Product } from './components/index.js';


// ABIs
// import Dappazon from './abis/Dappazon.json'

// Config
// import config from './config.json'

function App() {

  const [account, setAccount] = useState(null);


  const loadBlockchainData = async () => {
    const accounts = await window.etherum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  }

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div className=''>
      <Navigation account={account} setAccount={account} />
      <h2 className=''>Welcome to Dappazon</h2>

    </div>
  );
}

export default App;
