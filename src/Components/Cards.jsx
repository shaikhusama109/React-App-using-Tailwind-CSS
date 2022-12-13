import React from 'react'
import Single from '../Assets/single.png'
import Double from '../Assets/double.png'
import Triple from '../Assets/triple.png'


export const Cards = () => {
  return (
    <div className='bg-white w-full py-[10rem] px-4'>
        {/* Single User */}
        <div className='max-w-[1240px]  mx-auto grid md:grid-cols-3 gap-8 '>
            <div className='w-full shadow-xl p-4 my-4 hover:scale-110 duration-300 rounder-lg flex flex-col'>
                    <img className=' w-20 mx-auto mt-[-3rem] ' src={Single} alt="" />
                    <h1 className='text-2xl text-center py-8 font-bold ' >Single User</h1>
                    <p className=' text-2xl text-center py-1 font-bold '>$149</p>
                <div className='text-center font-medium'>
                    <p  className=' py-2 mx-10 mt-7 border-b border-b-gray-400 '>500 GB Storage</p>
                    <p  className=' py-2 mx-10 border-b border-b-gray-400'>1 Granted User</p>
                    <p  className=' py-2 mx-10 border-b border-b-gray-400'>Send upto 2 GB</p>
                 </div>    
                 <button className='bg-[#58C493] mx-auto text-black rounded-md p-1 w-[180px] mt-4 font-medium '>Start Trial</button>
            </div>
            

            {/* Double User  */}
            <div className='w-full bg-gray-100 shadow-xl p-4 md:my-0 my-8 hover:scale-110 duration-300 rounder-lg flex flex-col'>
                    <img className=' w-20 mx-auto mt-[-3rem] ' src={Double} alt="" />
                    <h1 className='text-2xl text-center py-8 font-bold ' >Partnership</h1>
                    <p className=' text-2xl text-center py-1 font-bold '>$199</p>
                <div className='text-center font-medium'>
                    <p  className=' py-2 mx-10 mt-7 border-b border-b-gray-400 '>1 TB Storage</p>
                    <p  className=' py-2 mx-10 border-b border-b-gray-400'>3 Users Allowed</p>
                    <p  className=' py-2 mx-10 border-b border-b-gray-400'>Send upto 10 GB</p>
                 </div>    
                 <button className='bg-black mx-auto text-[#58C493] rounded-md p-1 w-[180px] mt-4 font-medium '>Start Trial</button>
            </div>


            {/* Triple user */}
            <div className=' w-full shadow-xl p-4 my-4 hover:scale-110 duration-300 rounder-lg flex flex-col'>
                    <img className=' w-20 mx-auto mt-[-3rem] ' src={Triple} alt="" />
                    <h1 className='text-2xl text-center py-8 font-bold ' >Group Account</h1>
                    <p className=' text-2xl text-center py-1 font-bold '>$299</p>
                <div className='text-center font-medium'>
                    <p  className=' py-2 mx-10 mt-7 border-b border-b-gray-400 '>5 TB Storage</p>
                    <p  className=' py-2 mx-10 border-b border-b-gray-400'>3 Users Allowed</p>
                    <p  className=' py-2 mx-10 border-b border-b-gray-400'>Send upto 20 GB</p>
                 </div>    
                 <button className='bg-[#58C493] mx-auto text-black rounded-md p-1 w-[180px] mt-4 font-medium '>Start Trial</button>
            </div>

        </div>
    </div>
  )
}
