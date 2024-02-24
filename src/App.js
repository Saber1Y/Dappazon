import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { Navigation, Section, Product } from './components/index.js';


// ABIs
import Dappazon from './abis/Dappazon.json'

// Config
import config from './config.json'

function App() {

  const toggle = () => {
    console.log('toggle');
  }

  const [account, setAccount] = useState(null);

  const [provider, setProvider] = useState(null);

  const [dappazon, setDappazon] = useState(null);

  const [electronics, setElectronics] = useState(null);

  const [clothing, setClothing] = useState(null);

  const [toys, setToys] = useState(null);



  const loadBlockchainData = async () => {

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)
    const network = await provider.getNetwork()

    const dappazon = new ethers.Contract(config[network.chainId].dappazon.address, Dappazon, provider)
    setDappazon(dappazon)

    const items = []

    for (let i = 0; i < 9; i++) {
      const item = await dappazon.items(i + 1)

      items.push(item)
    }

    const electronics = items.filter((item) => item.category === 'electronics');
    const clothing = items.filter((item) => item.category === "clothing");
    const toys = items.filter((item) => item.category === "toys");

    setElectronics(electronics);
    setClothing(clothing);
    setToys(toys);
  }

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div className=''>
      <Navigation account={account} setAccount={account} />
      <h2 className=''>Dappazon's Best Picks</h2>

      {electronics && toys && clothing && (
        <>
          <Section title="Gaming" items={toys} toggle={toggle} />
          <Section title="Clothing" items={clothing} toggle={toggle} />
          <Section title="Electronics" items={electronics} toggle={toggle} />
        </>
      )}

    </div>
  );
}

export default App;
