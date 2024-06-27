import {  FaInstagram, FaLinkedin, FaMailBulk, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"
import "./styles/Footerstyle.css"
import React from 'react'
import { NavLink } from "react-router-dom"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="contact">
                   <h4> <FaPhoneAlt size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                    8306733043</h4>
                </div>
                <div className="contact">
                   <h4> <FaMailBulk size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                    rajhimanshu4321@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About</h4>
                <p>Aspiring software engineer with a good background in frontend and full stack development.</p>
            <div className="Social">
             <FaInstagram size={30} style={{color:"#fff" , marginRight:"2rem"}}/>
             <NavLink to="https://www.linkedin.com/in/himanshu-raj-670694267/"><FaLinkedin size={30} style={{color:"#fff" , marginRight:"2rem"}}/></NavLink>
             <FaWhatsapp size={30} style={{color:"#fff" , marginRight:"2rem"}}/>
            </div>

            </div>
        </div>

    </div>
  )
}

export default Footer