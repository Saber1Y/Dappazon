import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import React from 'react'
import Rating from './Rating'

import close from '../assets/close.svg'

const Product = ({ item, provider, account, dappazon, toggle }) => {

  const [order, setOrder] = useState(null)

  const handlebuy = async () => {
    const signer = await provider.getSigner();

    let transaction = await dappazon.connect(signer).buyProduct(item.id, { value: item.cost })
    await transaction.wait()
  }

  return (
    <div className="product">
      <div className='product__details'>
        <div className='prodcut__image'>
          <img src={item.image} alt="img" />
        </div>
        <div className="product__overview">
          <h1>{item.name}</h1>
          <Rating value={item.rating} />

          <hr />

          <p>{item.address}</p>
          <p>{ethers.utils.formatUnits(item.cost.toString(), 'ether')} ETH</p>

          <hr />

          <h2>Overview</h2>

          <p>
            {item.description}

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rem, iusto,
            consectetur inventore quod soluta quos qui assumenda aperiam, eveniet doloribus
            commodi error modi eaque! Iure repudiandae temporibus ex? Optio!
          </p>
        </div>
        <div className='product__order'>
          <p>{ethers.utils.formatUnits(item.cost.toString(), 'ether')} ETH</p>

          <p>
            Delivery <br />
            <strong>{new Date(Date.now() <= 3456000000).toLocaleString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</strong>
          </p>

          <div>
            {item.stock >= 0 ? (
              <p>{item.name} in Stock</p>
            ) :
              <p>{item.name} is not in stock</p>
            }
          </div>

          <button className='product__buy' onClick={handlebuy}>
            Buy product
          </button>
          <p><small>sold from</small>DAPPAZON</p>
          {/* <p><small>Bfrom</small>DAPPAZON</p> */}

          {order && (
            <div className='product__bought'>
              Item bought on <br />
              <strong>
                {new Date(Number(order.time.toString() + '000')).toLocaleString(undefined, { weekday: "long", hour: 'numeric', minute: 'numeric', second: 'numeric' })}
              </strong>
            </div>
          )}

        </div>
        <button className='product__close' onClick={() => toggle(item)}>
          <img src={close} alt='close' />
        </button>
      </div>

    </div >
  );
}

export default Product;