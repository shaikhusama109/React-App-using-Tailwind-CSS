import React from 'react'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare} from 'react-icons/fa'

  const Footer = () => {
  return (
    <div className=' max-w-[1240px] mx-auto gap-8 px-8 py-16 grid lg:grid-cols-3 text-gray-300'>
      
      {/* Col 1 */}
      <div className=''>
      <h1 className='w-full text-3xl font-bold text-[#58C493] '>REACT.</h1>
      <p className='py-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit porro quis laudantium omnis.</p>
      
      <div className='flex md:w-[75%]  justify-between my-6'>
      <FaFacebookSquare  className='text-white' size={30}/>
      <FaInstagram       className='text-white' size={30}/>
      <FaGithubSquare    className='text-white' size={30}/>
      <FaTwitterSquare   className='text-white' size={30}/>
      </div>
      
      </div>

    {/* Col 2 */}
      <div className='lg:col-span-2 mt-6 flex justify-between'>
          <div>
            <h6 className=' text-gray-400 font-medium'>Solutions</h6>
            <ul>
              <li className='text-sm py-2'>Analytics</li>
              <li className='text-sm py-2'>Marketing</li>
              <li className='text-sm py-2'>Commerce</li>
              <li className='text-sm py-2'>Insight</li>
            </ul>
          </div>
          
          <div>
            <h6 className=' text-gray-400 font-medium'>Suport</h6>
            <ul>
              <li className='text-sm py-2'>Pricing</li>
              <li className='text-sm py-2'>Documentation</li>
              <li className='text-sm py-2'>Guide</li>
              <li className='text-sm py-2'>API Status</li>
            </ul>
          </div>
          <div>
            <h6 className=' text-gray-400  font-medium'>Company</h6>
            <ul>
              <li className='text-sm py-2'>About</li>
              <li className='text-sm py-2'>Blogs</li>
              <li className='text-sm py-2'>Jobs</li>
              <li className='text-sm py-2'>Press</li>
            </ul>
          </div>
          <div>
            <h6 className='text-gray-400  font-medium'>Legal</h6>
            <ul>
              <li className='text-sm py-2'>Claim</li>
              <li className='text-sm py-2'>Policy</li>
              <li className='text-sm py-2'>Terms</li>
              <li className='text-sm py-2'>Rules</li>
            </ul>
          </div>

        
        
      </div>


    </div>
  )
}

export default Footer