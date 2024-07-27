import React from 'react'
import { FaAlignJustify } from "react-icons/fa6";

function Navbar() {
  return (
    <>
    <div className='flex justify-between align-center text-left bg-[#96C2DB] p-[20px] cursor-pointer'>
      <h1 className=' text-3xl text-black font-[600]'>BREAKING NEWS</h1>
      <span className='md:hidden'><FaAlignJustify className='h-full'/></span>
      <ul className='hidden md:flex align-center gap-x-10 text-2xl'>
        <li className='hover:font-[600]'>About</li>
        <li className='hover:font-[600]'>Contact</li>
        <li className='hover:font-[600]'>Signup</li>
        <li className='hover:font-[600]'>Login</li>
      </ul>
    </div>
    <ul className='md:hidden text-left text-2xl'>
        <li className='hover:font-[600] border-b-[#555] border-b-2  px-[20px]'>About</li>
        <li className='hover:font-[600] border-b-[#555] border-b-2  px-[20px]'>Contact</li>
        <li className='hover:font-[600] border-b-[#555] border-b-2  px-[20px]'>Signup</li>
        <li className='hover:font-[600] border-b-[#555] border-b-2  px-[20px]'>Login</li>
    </ul>
    </>
  )
}

export default Navbar