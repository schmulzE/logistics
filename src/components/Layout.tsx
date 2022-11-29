import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from './Layout.module.css'
import { Outlet } from 'react-router-dom'


const Layout:React.FC = () => {
  return (
    <div className={ styles.layout}>
      <Navbar/>
        <main>
          <Outlet/>
        </main>
      <Footer/>
    </div>
  )
}

export default Layout