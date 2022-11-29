import React from 'react'
import { Routes, Route} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Layout from './components/Layout'
import Login from './components/Login'
import Register from './components/Register'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
    </Routes>
  )
}

export default App
 