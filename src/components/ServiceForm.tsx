import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import FormWrapper from './FormWrapper'

const ServiceForm = ({title, text}: {title: string, text: string}) => {
  return (
    <FormWrapper title={title} text={text}>
      <form className='text-gray mt-8'>
        <div className="border-b mb-14 border-gray py-2">
          <span className="pr-4 capitalize text-sm">your Name</span>
          <input className='outline-none' />
        </div>
        <div className="border-b mb-14 border-gray py-2">
          <span className="pr-4  text-sm">Your eMail</span>
          <input className='outline-none' />
        </div>
        <div className="border-b flex border-gray py-2">
          <span className="pr-4 capitalize text-sm">Message</span>
          <textarea rows={5} className='outline-none w-full' />
        </div>
        <button type="submit" className='bg-[#39ff14] mt-10 p-5 font-medium a capitalize text-black'><AiOutlinePlus size={22} className="inline-block glyphicon mr-2"/>send messages</button>
      </form>
    </FormWrapper>
  )
}

export default ServiceForm