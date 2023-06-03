import { useEffect, useState } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom'
import Layout from './layout/Layout'
import AnimatedCursor from "react-animated-cursor";
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import RequestFreight from './pages/RequestFreight';
// import Login from './pages/Login'
// import Register from './pages/Register'


function App() {
  const [isInverted, setIsInverted] = useState(false)
  const [stickyClass, setStickyClass] = useState('lg:absolute lg:w-full lg:z-50 lg:bg-[transparent] border-b lg:border-white lg:text-white fixed top-0 left-0 z-50 bg-white w-full text-[#1b1b1b] border-b border-gray');
  const location = useLocation()


	useEffect(() => {
    // if(location.pathname === "/request-freight"){
    //   setStickyClass('absolute w-full z-50 bg-[transparent] border-b border-black text-black ')
    //   setIsInverted(true)
    // }
		// else if(location.pathname === "/blog") {
    //   setStickyClass('fixed top-0 left-0 z-50 bg-white w-full text-[#1b1b1b] border-b border-gray')
    // }else if(location.pathname === "/contact"){
    //   setStickyClass('fixed top-0 left-0 z-50 bg-white w-full text-[#1b1b1b] border-b border-gray')
    // }
  }, [])

	  useEffect(() => {
    
    if (location.pathname === "/") {
      window.addEventListener('scroll', stickyNavbar);
    }else if(location.pathname === "/blog") {
      setStickyClass('fixed top-0 left-0 z-50 bg-white w-full text-[#1b1b1b] border-b border-gray')
    }else if(location.pathname === "/contact"){
      setStickyClass('fixed top-0 left-0 z-50 bg-white w-full text-[#1b1b1b] border-b border-gray')
    }else if(location.pathname === "/request-freight"){
      setStickyClass('absolute w-full z-50 bg-[transparent] border-b border-black text-black ')
      setIsInverted(true)
    }else if(location.pathname === "/services"){
      setStickyClass('absolute w-full z-50 bg-[transparent] border-b border-black text-black')
      setIsInverted(true)
    }
    return () => {
      window.removeEventListener('scroll', stickyNavbar);
    }
  }, [location.pathname, setStickyClass, setIsInverted]);

	 const stickyNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 600 && setStickyClass('fixed top-0 left-0 z-50 bg-white w-full text-[#1b1b1b] border-b border-gray') 
      // : setStickyClass('absolute w-full z-50 text-white bg-[transparent] border-b border-white text-white');
    }
  };
  

  return (
    <div>
      <AnimatedCursor
				innerSize={12}
				outerSize={0}
				color={isInverted ? '0, 0, 0' : '57, 255, 20'}
				outerAlpha={0.2}
				innerScale={1.5}
				outerScale={5}
				clickables={[
					'a',
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					'label[for]',
					'select',
					'textarea',
					'button',
					'.link'
				]}
    	/>
    <Routes>
      {/* <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} /> */}
      <Route element={<Layout stickyClass={stickyClass} setStickyClass={setStickyClass} setIsInverted={setIsInverted}/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='request-freight' element={<RequestFreight setIsInverted={setIsInverted}/>}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='services' element={<Services setIsInverted={setIsInverted}/>}/>
      </Route>
    </Routes>
        </div>
  )
}

export default App
