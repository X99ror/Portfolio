import "./styles/Hero.css"
import React from 'react'
import IntroImg from "../assets/intro3.jpg"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="Space" />

        </div>
        <div className="content">
          <p>Hi,  I am Himanshu Raj</p>
        <h1>This is my portfolio</h1>
        
        
        <Link to="/Project" 
          className="btn">Projects</Link>
          <Link to="/Contact" 
          className="btn btn-light">Contact</Link>
          
        
        </div>
    </div>
  )
}

export default Hero