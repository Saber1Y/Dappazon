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
  const [dappazon, setDappazon] = useState(null);


  const loadBlockchainData = async () => {
    //creats connection to the chain
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider);

    //Network on chain

    const network = await provider.getNetwork();
    console.log(network);

    const dappazon = new ethers.Contract(
      config[network.chainId].dappazon.address,
      provider,
      Dappazon
    )
    setDappazon(dappazon)

    const items = []

    for (let i = 0; i < 9; i++) {
      const item = await dappazon.items(i + 1)
      items.psuh(item)
    }

    console.log(items);

    const electronics = items.filter((item) => item.category === 'electronics')
    console.log(electronics)

  }


  // useEffect(() => {
  //   loadBlockchainData();
  // }, []);

  return (
    <div className=''>
      <Navigation account={account} setAccount={account} />
      <h2 className=''>Dappazon's Best Picks</h2>
    </div>
  );
}

export default App;
