import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white w-full mb-[140px] items-center flex flex-col justify-center '>
        <p className='  mt-52 text-[#58C493] md:text-3xl sm:text-2xl '>Growing with data Analytics</p>
        <h1 className='p-2 text-white md:text-4xl sm:text-3xl font-bold '>Grow With Data.</h1>
        <h1 className='p-1 text-white md:text-4xl sm:text-3xl font-bold flex text-center'>Fast, flexible financing for 
         <Typed className='text-white md:text-4xl px-2 sm:text-3xl font-bold '
                    strings={['BTB.','BTC.','SASS.']}
                    typeSpeed={120} backSpeed={140} loop
                />
                </h1>

        <p className=' p-2 px-6 md:text-xl text-xl sm:text-xl text-center  text-gray-500 '>
          Monitor your data analytics to increase revenue from BTB,BTC & SASS platforms.
        </p>
        <button className='bg-[#58C493] text-black rounded-md p-1 w-[180px] mt-4 font-medium ' >Get Started</button>
        
    </div>
  )
}

export default Hero;