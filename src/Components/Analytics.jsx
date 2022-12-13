import React from 'react'
import Laptop from '../Assets/laptop.jpg'

export const Analytics = () => {
  return (
    <div className='bg-white pt-[80px]  grid md:grid-cols-2 px-[20px] mx-auto'>
      <img  className='' src={Laptop} alt="/" />
      <div className='mx-auto mt-[90px]  '>
      <p className=' font-bold  text-[#58C493]'>Data Analytics Dashboard</p>
      <h1 className=' font-bold pt-3 md:text-4xl sm:text-3xl text-xl md:flex-col' >Manage Data Analytics Centrally </h1>
      <p className=' font-medium pt-3 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas fugiat repellendus alias quos earum, aliquid, ex, excepturi libero veritatis explicabo aspernatur iure consequatur at modi molestias atque eius ullam fuga.</p>
      <button className='bg-black w-[200px] mx-auto text-[#58C493] rounded-md p-1  my-6 md:mx-0 font-medium ' >Get Started</button>
      </div>
      </div>
  )
}
 