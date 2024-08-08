import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Forms from '../components/Forms'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="CONTACT." text="Let's have some chat"/>
      <Forms/>
      <Footer/>
      </div>
  )
}

export default Contact