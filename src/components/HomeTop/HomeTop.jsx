import React, { useState } from 'react'
import './HomeTop.scss'
function HomeTop({setVal}) {
  return (
    <div className='home__top'>
      <div className='top__title'>
      <h2>Jaegar Resto</h2>
      <p>Tuesday, 2 Feb 2021</p>
      </div>
      <div className='top__search'>
      <i className ="bi bi-search"></i>
      <input onChange={(e)=>setVal(e.target.value)} type="text" placeholder='Search for food, coffe, etc..' />
      </div>
    </div>
  )
}

export default HomeTop
