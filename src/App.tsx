import { useEffect, useState } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom'
import Layout from './layout/Layout'
import AnimatedCursor from "react-animated-cursor";
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import RequestFreight from './pages/RequestFreight';
import { FaChevronUp } from 'react-icons/fa';
import Cursor from './components/Cursor/Cursor';


function App() {
 
  return (
    <div>
      <Cursor/>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='request-freight' element={<RequestFreight />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='services' element={<Services/>}/>
        </Route>
    </Routes>
    </div>
  )
}

export default App
