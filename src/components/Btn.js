import React from 'react'


const Btn = ({ text, onClick }) => {

  return (
    <button className='card__btn' type='button' onClick={onClick}>
      {text}
    </button>
  )
}

export default Btn
