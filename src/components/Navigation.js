// import { ethers } from 'ethers';
import React from 'react';

const Navigation = ({ account, setAccount }) => {

    return (
        <nav>
            <div className='nav__brand'>
                <div className='div__left'>
                    <h1>Dappazon</h1>
                    <p>Deliver to </p>
                </div>

                <div className='nav__search'>
                    <input type="text" className='nav__search' />
                </div>

                <div className='nav__right'>
                    <button type='button' className='nav__connect'></button>

                    <p>Returns {""}&<span>Orders</span></p>
                    <p className='cart'>Cart</p>
                </div>
            </div>
            <ul className='nav__links'>
                <li><a href='#clothing' />Clothing</li>
                <li><a href='Gaming' />Gaming</li>
                <li><a href='Electronics' />Electronics</li>
            </ul>
        </nav>
    );
}

export default Navigation;