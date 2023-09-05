import { useEffect, useMemo, useState, } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import {IoCloseOutline} from "react-icons/io5"
import Modal from "../Modal/Modal"
import "./Navbar.css"
import Menu from "../Modal/Menu";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(''); // Track the current page
  const [showModal, setShowModal] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [changeIcon, setChangeIcon] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Update the current page whenever the route changes
    setCurrentPage(location.pathname);
  }, [location]);

  const navbarClasses = `${currentPage === '/' ? 'lg:absolute lg:w-full lg:z-50 lg:bg-[transparent] border-b lg:border-white lg:text-white fixed top-0 left-0 z-50 bg-white w-full text-[#1b1b1b] border-b border-gray' : currentPage === '/services' ? 'absolute w-full z-50 bg-[transparent] border-b border-black text-black' : currentPage === '/request-freight' ? 'absolute w-full z-50 bg-[transparent] border-b border-black text-black' : 'fixed top-0 left-0 z-50 bg-white w-full text-[#1b1b1b] border-b border-gray'}`;

  const closeModal = () => {
    setShowModal(false);
  }
  const toggleMenu = () => {
    setShowMenu(prev => !prev);
    setChangeIcon(prev => !prev)
  }
	const invert = useMemo(() => {
		const isInverted = (location.pathname === '/services' || location.pathname === '/request-freight') ? 'invert' : 'default'
		return isInverted
  }, [location.pathname])

  return (
    <>
      <nav className={`flex justify-between ${navbarClasses} `} onMouseEnter={ e => (location.pathname === '/request-freight') } data-cursor={invert}>
        <header className="">
            <Link data-cursor={invert}  to="/" className='block nav-link text-3xl leading-[68px] ml-4 border-none outline-none'>Logo</Link>
        </header>
        <ul data-cursor={invert} className='justify-around gap-8 text-base font-medium capitalize leading-[70px] flex'>
          <li><NavLink data-cursor={invert} to='/' className={ (location.pathname === '/services' || location.pathname === '/request-freight' ? "nav-link-dark " : 'nav-link ') + " hidden lg:block"}>home</NavLink></li>
          <li><NavLink data-cursor={invert} to='blog' className={(location.pathname === '/services' || location.pathname === '/request-freight' ? "nav-link-dark " : 'nav-link ') + " hidden lg:block" }>blog</NavLink></li>
          <li><NavLink data-cursor={invert} to='contact' className={(location.pathname === '/services' || location.pathname === '/request-freight' ? "nav-link-dark " : 'nav-link ') + " hidden lg:block"}>contact</NavLink></li>
          <li><NavLink data-cursor={invert} to="services" className={(location.pathname === '/services' || location.pathname === '/request-freight' ? "nav-link-dark " : 'nav-link ') + " hidden lg:block"} data-theme="dark">services</NavLink></li>
          <li><NavLink data-cursor={invert} to='request-freight' className={ (location.pathname === '/services' || location.pathname === '/request-freight' ? "nav-link-dark " : 'nav-link') + " hidden lg:block"} data-theme="dark">request a freight</NavLink></li>
          <div className="border-l height-full hidden lg:block" />
          <li data-cursor={invert} className={ (location.pathname === '/services' || location.pathname === '/request-freight' ? "nav-link-dark " : 'nav-link') + " hidden lg:block px-9"} onMouseEnter={e => setShowModal(true)} onMouseLeave={e => setShowModal(false)}>
            Track your order
          {showModal && <Modal onConfirm={closeModal}/>}
          </li>
          <li onClick={toggleMenu} className={ (location.pathname === '/services' || location.pathname === '/request-freight' ? "bg-black text-white block border-l border-black" : '') + " px-8 button cursor-none z-[10000] border-l border-white"} > 
            <NavLink data-cursor="click" to='#' className={`hover:z-50 cursor-none`}>
              {changeIcon ? <IoCloseOutline data-cursor="click" size={38} className="cursor-none inline hover:z-50 z-[10000] text-white"/> : <IoIosMenu data-cursor="click" size={38} className="cursor-none inline hover:z-50 z-[10000] text-white"/>}
            </NavLink>
          </li>
				</ul>
			</nav> 
      {showMenu && <Menu onConfirm={toggleMenu}/>}
    </>
  )
}

export default Navbar