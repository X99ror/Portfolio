import React from 'react'
import Navbar from "../components/Navbar.js"
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2.js'
import Card from '../components/Card.js'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="PROJECTS" text="Here are Some of my works"/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default Project