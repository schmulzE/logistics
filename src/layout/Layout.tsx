import React, { Dispatch, useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Navbar2 from '../components/Navbar/Navbar2'
import styles from './Layout.module.css'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={ styles.layout }>
      {scrolling ? <Navbar2/> : <Navbar/>}
        <main>
          <Outlet/>
        </main>
      <Footer/>
    </div>
  )
}

export default Layout