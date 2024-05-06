import React from 'react'
import './Card.scss'
function Card({item}) {
  return (
    <div className='my__card'>
      <img src={item.img} alt="" />
      <h4>{item.title}</h4>
      <span>{item.price} so'm</span>
    </div>
  )
}

export default Card
