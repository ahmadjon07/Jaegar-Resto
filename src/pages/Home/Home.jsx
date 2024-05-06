import React, { useState } from 'react'
import HomeTop from '../../components/HomeTop/HomeTop'
import './Home.scss'
import { foodData } from '../../lib/data'
import Card from '../../components/Card/Card'
import Order from '../../components/Order/Order'
function Home() {
  const [active, setActive] = useState('milliy')
  const [val, setVal] = useState('')
  const [food, setFood] = useState('')
  const [render, setRender] = useState(true)
  let a = []
  foodData.forEach((item)=>{
    if(!a.includes(item.category)){
      a.push(item.category)
    }
  })
  let localArr = []
  function fnFood(item) {
    setRender(!render)
    if (window.localStorage.getItem('locdata')) {
      localArr = JSON.parse(window.localStorage.getItem('locdata')) 
    }
    if (!localArr.find((i)=>i.id === item.id)) {
      item.count = 1
      localArr.push(item)
    window.localStorage.setItem('locdata', JSON.stringify(localArr))
    }else{
      localArr.find((i)=>i.id === item.id).count = localArr.find((i)=>i.id === item.id).count + 1
      window.localStorage.setItem('locdata', JSON.stringify(localArr))
    }
  }
  return (
    <div className='home'>
    <div className="home__inner">
    <HomeTop setVal={setVal}/>
      <ul className="home__nav">
        {
          a.map((item, index)=>(           
              <li onClick={()=> setActive(item)} key={index} className={active === item ? "home__item active" : "home__item"}>
                  {item}
              </li>
          ))
        }
      </ul>
     <ul className="home__list">
      {
        val.length > 0 ? foodData.filter((i)=> i.title.toLowerCase().includes(val.toLowerCase())).map((item, index)=>(
          <li onClick={()=> fnFood(item )} key={index} className="home__item">
            <Card item={item}/>
          </li> )):
          foodData?.filter((i)=>i.category === active).map((item, index)=>(
            <li onClick={()=> fnFood(item )} key={index} className="home__item">
              <Card item={item}/>
            </li>))
      }
     </ul>
    </div>
     <Order render={render} setRender={setRender}/>
    </div>
  )
}

export default Home