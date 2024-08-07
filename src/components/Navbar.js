import { Link } from "react-router-dom"
import "./styles/Navbarstyles.css"
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [click,setClick]= useState(false);
    const handleOnclick = () => setClick(!click);
  return (
    <>
    <div className="header">
        <Link to="/">
             <h1>Himanshu's Portfolio.</h1>
        </Link>     
             <ul className={click ? "nav-menu active":"nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Project">Project</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
             </ul>

        <div className="hamburger" onClick={handleOnclick}>
            {click ? (<FaTimes size={20} style={{color : "#fff"}}/>
            ):(<FaBars size={20} style={{color : "#fff"}}/>)}
        </div>
    </div>
    </>
  )
}

export default Navbar
