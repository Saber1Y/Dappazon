import { ethers } from 'ethers';
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = ({ account, setAccount }) => {

    const connectAcc = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
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
                    <form class="custom-form">
                        <label for="default-search" class="custom-label">Search</label>
                        <div class="custom-relative">
                            <div class="custom-absolute">
                                <svg class="custom-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path class="custom-path" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="custom-input" placeholder="Search Mockups, Logos..." required />
                            <button type="submit" class="custom-button">Search</button>
                        </div>
                    </form>

                </div>
                <div className='nav__right'>
                    {account ? (
                        <button className='nav__connect' type='button'>
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