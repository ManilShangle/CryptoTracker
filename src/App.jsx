import React from 'react'
import Navbar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Blog from './pages/Blog/Blog'
import Pricing from './pages/Pricing/Pricing'
import Features from './pages/Features/Feature'
import SignUp from './pages/SignUp/SignUp'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinID' element={<Coin/>}/>
        <Route path='/blog' element={<Blog/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/features' element={<Features/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
