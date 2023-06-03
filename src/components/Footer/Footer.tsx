import React, { useEffect, useRef, useState } from 'react'
import { HiArrowUp, HiOutlineChevronDoubleUp, HiOutlineChevronUp } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [iconHover, setIconHover] = useState(false)
  const LinkRef = useRef<HTMLAnchorElement>(null)

	// useEffect(() => {
  //   LinkRef.current?.addEventListener('mouseover', (e) => {
  //     setIconHover(prev => !prev)
  //   })
  //   return () => {
  //     LinkRef.current?.removeEventListener('mouseover', (e) => {
  //       setIconHover(prev => !prev)
  //     })
  //   }
  // }, [])

  useEffect(() => {
    window.addEventListener('scroll', stickyNavbar);
    return () => {
      window.removeEventListener('scroll', stickyNavbar);
    }
  }, []);

  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const stickyNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight < 25 ? LinkRef.current?.classList.add("hidden") : LinkRef.current?.classList.remove("hidden");
    }
  };

  return (
    <footer className='bg-[#1b1b1b] text-white '>
     <ul className="lg:grid lg:grid-cols-6 my-16 py-8 mx-auto w-4/5  ">
      <li className="text-5xl font-semibold capitalize col-span-2 text-left">logo</li>
      <li>
        <ul className="text-base capitalize">
          <li className='mb-6 mt-6'>our divisions</li>
          <li className='text-[#929292]'>about us</li>
          <li className='text-[#929292]'>our team</li>
          <li className='text-[#929292]'>our clients</li>
          <li className='text-[#929292]'>meet the crew</li>
          <li className='text-[#929292]'>available positions</li>
          <li className='text-[#929292]'>job application</li>
        </ul>
      </li>
      <li className="text-base capitalize">
        <ul>
          <li className='mb-6 mt-6'>company service</li>
          <li className='text-[#929292]'>our service</li>
          <li className='text-[#929292]'>what we do</li>
          <li className='text-[#929292]'>request a freight</li>
          <li className='text-[#929292]'>track and trace</li>
          <li className='text-[#929292]'>air frieght</li>
          <li className='text-[#929292]'>rail freight</li>
          <li className='text-[#929292]'>maritime transportation</li>
        </ul>
      </li>
      <li className="text-base capitalize">
        <ul>
          <li className='mb-6 mt-6'>contact us</li>
          <li className='text-[#929292]'>find us here</li>
          <li className='text-[#929292]'>get in here</li>
          <li className='text-[#929292]'>FAQ page</li>
          <li className='text-[#929292]'>global network</li>
          <li className='text-[#929292]'>support 24/7</li>
        </ul>
      </li>
      <li className="text-base capitalize">
        <ul >
          <li className='font-medium mt-6 mb-6'>latest news</li>
          <li className='text-[#929292]'>expert tips</li>
          <li className='text-[#929292]'>a sustainable future</li>
          <li className='text-[#929292]'>fresh start</li>
          <li className='text-[#929292]'>tips & strageties</li>
        </ul>
      </li>
     </ul>
     <hr className="text-[#929292]" />
     <div className="text-center text-[#929292] text-sm mt-4">© 2023 schmulzCode, All Rights Reserved</div>
     <Link to="#" ref={LinkRef} onClick={onScrollTop} onMouseEnter={e => setIconHover(true)} onMouseLeave={e => setIconHover(false)}  className="fixed right-0 bottom-0 w-16 h-16 rounded-full mb-8 mr-8 bg-[#39ff14] z-[10000] cursor-none transition duration-700 ease-in-out">{iconHover ? <HiArrowUp className='text-black ml-4 mt-4 transition duration-700 ease-in-out' size={30}/> :<HiOutlineChevronUp className='text-black ml-4 mt-4 transition duration-700 ease-in-out' size={30}/>}</Link>
  </footer>
  )
}

export default Footer