import { useCallback, useEffect, useMemo, useState, } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import {IoCloseOutline} from "react-icons/io5";
import "./Navbar.css";
import Menu from "../Modal/Menu";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('lg:fixed lg:top-0 lg:left-0 lg:z-50 lg:bg-white lg:w-full lg:text-[#1b1b1b] lg:border-b lg:border-gray');
  const [showMenu, setShowMenu] = useState(false)
  const [changeIcon, setChangeIcon] = useState(false)
  const location = useLocation()


  useEffect(() => {
   
    if(location.pathname === "/blog") {
      setStickyClass('fixed top-0 left-0 z-50 bg-white w-full text-[#1b1b1b] border-b border-gray')
    }else if(location.pathname === "/contact"){
      setStickyClass('fixed top-0 left-0 z-50 bg-white w-full text-[#1b1b1b] border-b border-gray')
    }else if(location.pathname === "/request-freight"){
      setStickyClass('absolute w-full z-50 bg-[transparent] border-b border-black text-black ')
    }else if(location.pathname === "/services"){
      setStickyClass('absolute w-full z-50 bg-[transparent] border-b border-black text-black')
    }

}, [location.pathname, setStickyClass, stickyClass]);

  const closeMenu = () => {
    setShowMenu(false);
  }
	const invert = useMemo(() => {
		const isInverted = (location.pathname === '/services' || location.pathname === '/request-freight') ? 'invert' : 'default'
		return isInverted
   }, [location.pathname])

  return (
    <>
      <nav className={`flex justify-between ${stickyClass} `} onMouseEnter={ e => (location.pathname === '/request-freight') } data-cursor={invert}>
        <header className="">
            <Link data-cursor={invert}  to="/" className='block nav-link text-3xl leading-[68px] ml-4 border-none outline-none'>Logo</Link>
        </header>
        <ul data-cursor={invert} className='justify-around gap-8 text-base font-medium capitalize leading-[70px] flex'>
          <li><NavLink data-cursor={invert} to='/' className={ (location.pathname === '/services' || location.pathname === '/request-freight' ? "nav-link-dark " : 'nav-link ') + " hidden lg:block"}>home</NavLink></li>
          <li><NavLink data-cursor={invert} to='blog' className={ (location.pathname === '/services' || location.pathname === '/request-freight' ? "nav-link-dark " : 'nav-link ') + " hidden lg:block" }>blog</NavLink></li>
          <li><NavLink data-cursor={invert} to='contact' className={ (location.pathname === '/services' || location.pathname === '/request-freight' ? "nav-link-dark " : 'nav-link ') + " hidden lg:block"}>contact</NavLink></li>
          <li><NavLink data-cursor={invert} to="services" className={(location.pathname === '/services' || location.pathname === '/request-freight' ? "nav-link-dark " : 'nav-link ') + " hidden lg:block"} data-theme="dark">services</NavLink></li>
          <li><NavLink data-cursor={invert} to='request-freight' className={ (location.pathname === '/services' || location.pathname === '/request-freight' ? "nav-link-dark " : 'nav-link') + " hidden lg:block"} data-theme="dark">request a freight</NavLink></li>
          <li onClick={() => setShowMenu(true)} className={ (location.pathname === '/services' || location.pathname === '/request-freight' ? "bg-black text-white block " : '') + " px-8 button bg-black cursor-none z-[10000]"} > 
            <NavLink data-cursor="click" to='#' className={`hover:z-50 cursor-none`}>
              {!changeIcon ? <IoIosMenu data-cursor="click" size={38} className="cursor-none text-white inline hover:z-50 z-[10000]"/> : <IoCloseOutline data-cursor="click" size={38} className="cursor-none inline text-white hover:z-50 z-[10000]"/>}
            </NavLink>
          </li>
				</ul>
			</nav> 
      {showMenu && <Menu onConfirm={closeMenu}/>}
    </>
  )
}

export default Navbar