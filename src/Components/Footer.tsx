import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-[140px] bg-gray-600'>
      <div className='max-w-[1400px] h-full mx-auto px-6 xl:px-0'>
        <div className='flex justify-between items-center w-full h-full'>
          <div className='min-w-[200px] h-full flex items-center'>
            <h1 className='text-[16px] text-white'>© 2024 Visual Artist Portfolio
            Visual designer</h1>
          </div>
          <div className='flex justify-between w-[150px] xl:w-[300px] text-2xl xl:text-3xl text-white'> 
            <a href="">
              <FaFacebookSquare className='hover:scale-[1.2] hover:text-[#c7dffc] duration-150 active:scale-110' />
            </a>
            <a href="" >
              <FaLinkedin className='hover:scale-[1.2] hover:text-[#c7dffc] duration-150 active:scale-110' />
            </a>
            <a href="">
              <FaTwitter className='hover:scale-[1.2] hover:text-[#c7dffc] duration-150 active:scale-110' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer