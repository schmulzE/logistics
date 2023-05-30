import { Dispatch, useState, } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import Modal from "../Modal/Modal"
import styles from "../Navbar/Navbar.module.css"


const Navbar = ({setIsInverted, stickyClass, setStickyClass} : {setIsInverted: Dispatch<boolean>, stickyClass: string, setStickyClass: Dispatch<string>}) => {
  const location = useLocation()
	const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <nav className={`flex justify-between ${stickyClass} `} onMouseEnter={ e => (location.pathname === '/request-freight') && setIsInverted(true)}>
			<header>
				<Link to="/" className='block nav-link text-3xl leading-[68px] ml-4 border-none outline-none'>Logo</Link>
			</header>
			<ul className='flex justify-around gap-8 text-base font-medium capitalize leading-[70px]'>
				<li><NavLink to='/' className={`${styles["nav-link"]}`}>home</NavLink></li>
				<li><NavLink to='blog' className={`${styles["nav-link"]}`}>blog</NavLink></li>
				<li><NavLink to='contact' className={`${styles["nav-link"]}`}>contact</NavLink></li>
				<li><NavLink to="services" className={`${styles["nav-link"]}`}>services</NavLink></li>
				<li><NavLink to='request-freight' className={`${styles["nav-link"]}`}>request a freight</NavLink></li>
				<div className="border-l height-full" />
				<li className="px-9 nav-link" onMouseEnter={e => setShowModal(true)} onMouseLeave={e => setShowModal(false)}>
				Track your order
				{showModal && <Modal onConfirm={closeModal}/>}
				</li>
				<li className={ (location.pathname === '/service' && "bg-black text-white " ) + " px-8 button cursor-none z-[10000]"} >  <NavLink to='' className={`hover:z-50 cursor-none`}><IoIosMenu size={38} className="cursor-none inline hover:z-50 z-[10000]"/></NavLink></li>
			</ul>
		</nav> 
  )
}

export default Navbar