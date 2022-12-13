import React from 'react'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare} from 'react-icons/fa'

  const Footer = () => {
  return (
    <div className='w-full max-wd-[1240px] grid grid-cols-3 py-9 px-4'>
      
      {/* Col 1 */}
      <div>
      <h1 className='text-3xl font-bold text-[#58C493] '>REACT.</h1>
      <p className='text-white py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit porro quis laudantium omnis.</p>
      
      <div className='flex justify-between my-4'>
      <FaFacebookSquare  className='text-white' size={30}/>
      <FaInstagram       className='text-white' size={30}/>
      <FaGithubSquare    className='text-white' size={30}/>
      <FaTwitterSquare   className='text-white' size={30}/>
      </div>
      
      </div>

    {/* Col 2 */}



    </div>
  )
}

export default Footer