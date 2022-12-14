import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export const Header = () => {
      const [toggle, setToggle] = useState(false);

  return (
   
    <div className='bg-black p-4  '>
        <div className='max-w-[1240px] p-[15px] items-center  mx-auto flex justify-between'>
           <div className='text-3xl font-bold text-[#58C493] '>REACT.</div>
           {

            toggle ? <AiOutlineClose onClick={ ()=> setToggle(!toggle)}  className='text-white text-2xl md:hidden block' />
                   : <AiOutlineMenu onClick={ ()=> setToggle(!toggle)}  className='text-white text-2xl md:hidden block' />
                    
           }
            <ul className='hidden md:flex text-white gap-4 '>
              <li>Home </li>
              <li>Company</li>
              <li>Resources</li>
              <li>About</li>
              <li>Contact </li>
            </ul>

            {/* Responsive */}
           <div className={`md:hidden fixed top-[15.7%] w-[60%] h-full border-r border-r-gray-800 bg-black text-white 
                            ${toggle ? 'left-[0] ease-in-out duration-500' : 'left-[-100%] ease-in-out duration-500'} `}>
            <ul className='uppercase'>
              <li className='m-6 p-4 border-b border-b-gray-800 '>Home </li>
              <li className='m-6 p-4 border-b border-b-gray-800 '>Company</li>
              <li className='m-6 p-4 border-b border-b-gray-800'>Resources</li>
              <li className='m-6 p-4 border-b border-b-gray-800'>About</li>
              <li className='m-6 p-4 '>Contact </li>
            </ul>
            </div>
        </div>
    </div>
   
 )
}

