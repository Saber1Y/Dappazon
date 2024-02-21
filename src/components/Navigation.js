import { ethers } from 'ethers';
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = ({ account, setAccount }) => {

    const connectAcc = async () => {
        const accounts = await window.etherum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0]);
        setAccount(account);
    }

    return (
        <nav>
            <div className='nav__brand'>
                <div className='div__left'>
                    <h1>Dappazon</h1>
                    <p>Deliver to  </p>
                </div>
                <div className='nav__search'>
                    <input type="text" className='nav__search' placeholder='Search...'/>
                </div>
                <div className='nav__right'>
                    {account ? (
                        <button  className='nav__connect' type='button'>
                            {account.slice(0, 6) + "" + account.slice(32, 60)}
                        </button>) : (
                        <button 
                            className='nav__connect' type='button' onClick={connectAcc}
                        >Connect</button>
                    )}

                    <p>Returns {""}&<span>Orders</span></p>
                    <p className='cart'>Cart</p>

                </div>
            </div>
            <ul className='nav__links'>
                <li className='nav__links-icon'><span><GiHamburgerMenu /></span>All</li>
                <li><a href='#clothing' />Clothing</li>
                <li><a href='Gaming' />Gaming</li>
                <li><a href='Electronics' />Electronics</li>
            </ul>
        </nav>
    );
}

export default Navigation;