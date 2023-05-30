import {useEffect, useRef} from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { gsap } from 'gsap'

const ServicesList = () => {
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const links =  listRef.current?.querySelectorAll("#link")
    links?.forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
      gsap.to( `#text-${index + 1}`, {
        x: 30
      })
      gsap.to(`#icon-${index + 1}`, {
        opacity: 1,
        x: 10,
        rotateZ: 90,
      })
    })
    link.addEventListener('mouseleave', () => {
      gsap.to( `#text-${index + 1}`, {
        x: 0
      })
      gsap.to(`#icon-${index + 1}`, {
        opacity: 0,
        x: 0,
        rotateZ: -90,
      })
    })
  })
  

}, [])


  
  return (
    <>
      <h1 className="text-xl font-medium mb-5">Transport solutions</h1>
      <hr className="text-gray" />
      <ul ref={listRef} className='text-base font-medium'>
        <li id="link" className='py-5 relative'>
          <AiOutlinePlus size={20} id="icon-1" className='inline opacity-0 -mx-2'/>
          <span id="text-1" className='inline-block align-middle'>Air Freight</span>
        </li> 
        <hr className="text-gray" />
        <li id="link" className='py-5'>
          <AiOutlinePlus size={20} id="icon-2" className='inline opacity-0 -mx-2'/>
          <span id="text-2"className='inline-block align-middle'>Sea Freight</span>
        </li>
        <hr className="text-gray" />
        <li id="link" className='py-5'>
          <AiOutlinePlus size={20} id="icon-3" className='inline opacity-0 -mx-2'/>
          <span id="text-3"className='inline-block align-middle'>Rail Freight</span>
        </li>
        <hr className="text-gray" />
        <li id="link" className='py-5'>
          <AiOutlinePlus size={20} id="icon-4" className='inline opacity-0 -mx-2'/>
          <span id="text-4"className='inline-block align-middle'>Land Transportation</span>
        </li>
        <hr className="text-gray" />
      </ul>
    </>
  )
}

export default ServicesList