"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { TbXboxXFilled } from 'react-icons/tb'

type MenuItem = "ON" | "OFF"

const Naveber = () => {
  const [ manu , setManu ] = useState<MenuItem>("OFF");
  return (
    <div className='w-full h-[80px] bg-slate-400'>
      <div className='max-w-[1400px] mx-auto h-full px-6 xl:px-0'>
        <div className='flex justify-between items-center w-full h-full'>
          {/* Logo */}
          <div className=''>
            <a href="/">
              <Image src="/Image/figma.png" width={40} height={40} className='' alt="#" />
            </a>
          </div>
          {/* Big devices Menu */}
          <div className='hidden w-[400px] h-full text-white md:flex justify-between items-center'>
            <a href="/">
              <h4 className='hover:scale-110 hover:text-[#dfdfdf] duration-150 active:scale-110'>Home</h4>
            </a>
            <a href="/">
              <h4 className='hover:scale-110 hover:text-[#dfdfdf] duration-150 active:scale-110'>Work</h4>
            </a>
            <a href="/">
              <h4 className='hover:scale-110 hover:text-[#dfdfdf] duration-150 active:scale-110'>Contact</h4>
            </a>
          </div>
          {/* Mobil Menu */}
          <div className='md:hidden'>
            <IoMenu onClick={()=> manu === "OFF" ? setManu("ON") : setManu("OFF")} className='hover:scale-[1.2] text-3xl text-white hover:text-[#c7dffc] duration-150 active:scale-110' />
          </div>
          <div className={manu === "ON" ? 'absolute w-[150px] h-[200px] bg-gray-500 rounded-md top-2 left-2 md:hidden duration-150 ease-linear' : 'absolute w-[300px] h-[400px] bg-gray-500 rounded-md left-2 md:hidden -top-[400px] duration-150 ease-linear'}>
            <div className='w-full relative'>
              <TbXboxXFilled className='absolute cursor-pointer top-2 right-2 text-2xl text-white active:scale-110' onClick={()=> manu === "OFF" ? setManu("ON") : setManu("OFF")} />
            </div>
            <div className='mt-16'>
              <div className='w-[60px] mx-auto mb-3 h-[30px] hover:scale-110  duration-150 active:scale-110'>
                <a href="/" className='text-[white] hover:text-[#b4bccf] block font-semibold'>Home</a>
              </div>
              <div className='w-[60px] mx-auto mb-3 h-[30px] hover:scale-110  duration-150 active:scale-110'>
                <a href="/" className='text-[white] hover:text-[#b4bccf] block font-semibold'>Work</a>
              </div>
              <div className='w-[60px] mx-auto mb-3 h-[30px] hover:scale-110  duration-150 active:scale-110'>
                <a href="/" className='text-[white] hover:text-[#b4bccf] block font-semibold'>Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Naveber