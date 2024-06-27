import './Aboutcontent.css'
import React from 'react'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import { FaGithub } from 'react-icons/fa'


const Aboutcontent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>My name is Himanshu</h1>
            <p>
           
                I am a student at NIT Calicut.I create web-applications. 
            </p>
            <div className='btns'>
            <a href="https://drive.google.com/file/d/1W32cnK8ov-qCct770vznGxI2CUyGorUf/view?usp=sharing" >
      <button className="btn">My Resume</button>
    </a>
    <a href="https://leetcode.com/u/H_R_J/" >
      <button className="btn">My Leetcode Profile</button>
    </a>
    <a href="https://github.com/X99ror">
      <button className="btn"><FaGithub size={20} style={{color:"#fff" , marginRight:"2rem"}}/>My Github</button>
    </a>
            </div>
            

        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={project2} className='img' alt='true'></img>
            
                </div>
                <div className='img-stack bottom'>
                    <img src={project3} className='img' alt='true'></img>
            
                </div>
                    
            
            </div>
            
        </div>
    </div>
  )
}

export default Aboutcontent