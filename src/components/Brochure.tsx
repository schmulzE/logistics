import React, { Dispatch } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Brochure = ({setIsInverted} : {setIsInverted: Dispatch<boolean>}) => {
  return (
   <div className='flex flex-col my-16'>
    <div onMouseEnter={e => setIsInverted(true)} onMouseLeave={e => setIsInverted(false)} className="px-8 py-10 bg-[#39ff14] ">
      <p className="text-sm my-5">Download Brochure</p>
      <p className="text-3xl font-medium">Our Services Brochure</p>
    </div>
    <div className="p-4 bg-[#1b1b1b] text-white z-[9999]">
      <Link to='' className='cursor-none flex a'>
        <div className='text-xl rounded-full w-12 h-12 cursor-none mt-4'>
          <AiOutlinePlus className='inline-block ml-3.5 glyphicon' color='white'/>
        </div>
        <p className='mt-5 capitalize text-base font-medium'>Download PDF</p>
      </Link>
    </div>
   </div>
  )
}

export default Brochure