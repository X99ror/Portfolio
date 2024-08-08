
import './Cardstyle.css'
import React from 'react'
import Work from './Work'
import Caddata from './Carddata'


const Card = (props) => {
  return (
    <div className='container'>
        
       
       <h1 className='project-heading'>Projects</h1>
       
        <div className='project-container'>
            {Caddata.map((value,index)=> {
                return(
                    <Work
                    key={index}
                    img={value.img}
                    title={value.title}
                    text={value.text}
                    view={value.viewsrc}
                    src={value.src}/>
                )
            })}
        </div>
       </div>
     
  )
}

export default Card