import { ethers } from 'ethers'
import React from 'react';

import Rating from './Rating'

const Section = ({ title, items, toggle }) => {
    return (
        <div className='cards__section'>
            <h2>{title}</h2>

            <hr className='' />

            <div className='cards'>
                {items.map((item, index) => (
                    <div className='card' key={index} onClick={() => toggle(item)}>
                        <div className='card__image'>
                            <img src={item.image} alt='image' />
                        </div>
                        <div className='card__info'>
                            <h3>{item.name}</h3>
                            <Rating value={item.rating} />
                            <p>{ethers.utils.formatUnits(item.cost.toString(), 'ether')} ETH</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Section;