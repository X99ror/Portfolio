import React from 'react'
import { NavLink } from 'react-router-dom'
const Work = (props) => {
  return (
    <div className='project-container'>
            <div className='project-card'>
                <img src={props.img} alt="project"/>
                <div className='project-title'><h2>{props.title}</h2></div>
                <div className='details'>
                    <p>{props.text}</p>
                    <div className='project-btn'>
                        <NavLink to={props.viewsrc} className="btn">View</NavLink>
                        <NavLink to={props.src} className="btn">Source</NavLink>

                    </div>
                </div>
            </div>
        </div>
  
  )
}

export default Work