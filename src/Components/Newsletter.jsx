import React from 'react'

export const Newsletter = () => {
  return (
    <div className=' w-full mb-[40px] py-20 px-4 '>
        <div className='max-w-[1240px] mx-auto mt-6 grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
            <h1 className='text-white md:text-3xl sm:text-2xl text-xl py-4 font-bold  '>Want tips and tricks to optimize your flow?</h1>
            <p className='text-white '>Signup to our newsletter and stay up to date</p>
            </div>
        <div className='my-auto'>
            <input className='w-full rounded-md p-3 my-4 ' placeholder='Enter Your Email Adress' type="text" />
            <button className='bg-[#58C493] text-black rounded-md p-1 w-[180px] mt-4 font-medium md:my-3' >Notify Me</button>
            <p className='text-white mt-2 '>We Care About your data protection read our <span className=' text-decoration-line: underline text-[#58C493]'>Privacy Policy</span></p>
        </div>
        
        </div>
    </div>
  )
}
