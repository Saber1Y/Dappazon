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
                    <form className="custom-form">
                        <div className="custom-flex">
                            {/* <button id="dropdown-button" data-dropdown-toggle="dropdown" className="custom-button" type="button">All categories <svg className="custom-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
                                <path className="custom-path" d="m1 1 4 4 4-4" />
                            </svg></button> */}
                            {/* <div id="dropdown" className="custom-dropdown">
                                <ul className="custom-ul" aria-labelledby="dropdown-button">
                                    <li><button type="button" className="custom-dropdown-button">Mockups</button></li>
                                    <li><button type="button" className="custom-dropdown-button">Templates</button></li>
                                    <li><button type="button" className="custom-dropdown-button">Design</button></li>
                                    <li><button type="button" className="custom-dropdown-button">Logos</button></li>
                                </ul>
                            </div> */}
                            <div className="custom-relative">
                                <input type="search" id="search-dropdown" className="custom-input" placeholder="Search..." required />
                                <button type="submit" className="custom-submit">
                                    <svg className="custom-submit-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path className="custom-path" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </button>
                            </div>
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