import React from 'react'
import Logo from './../assets/logo/LogisticsAsset 1.svg'
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className='nav-bar flex lg:justify-around p-3 lg:min-h-[20vh] justify-between items-center absolute w-full text-white'>
      <div className="logo">
        <img src={Logo} alt="logo" className='lg:w-28 w-24'/>
      </div>
      <ul className='lg:flex lg:justify-around w-[45%] hidden'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Track</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
      <div className="button lg:flex lg:justify-around lg:w-[20%] hidden">
        <button className='text-white border-white border-2 px-6 text-sm'>
          Sign in
        </button>
        <button className='bg-[#73be01] text-white py-4 px-7 text-sm p-0'>
          Get started
        </button>
      </div>
      <button className='cursor-pointer hover:color'>
        <BiMenuAltRight size={48} className="lg:hidden text-[#73be01]"/>
      </button>
    </nav>
  )
}

export default Navbar