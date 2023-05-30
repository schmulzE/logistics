import React, { Dispatch } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import styles from './Layout.module.css'
import { Outlet } from 'react-router-dom'


const Layout = ({setIsInverted, stickyClass, setStickyClass} : {setIsInverted: Dispatch<boolean>, stickyClass: string, setStickyClass: Dispatch<string>}) => {
  return (
    <div className={ styles.layout }>
      <Navbar setIsInverted={setIsInverted} stickyClass={stickyClass} setStickyClass={setStickyClass}/>
        <main>
          <Outlet/>
        </main>
      <Footer/>
    </div>
  )
}

export default Layout