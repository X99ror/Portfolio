import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Card from'../components/Card.js'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Card/>
        <Footer/>
        
    </div>
  )
}

export default Home