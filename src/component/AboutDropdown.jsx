import React from 'react'
import '../util/AboutDropdown.css'
import {FaAngleUp} from 'react-icons/fa'

const AboutDropdown = (props) => {
    
  return (
    <article className='aboutDropdown-container'>
        <div className='aboutDropdown-header'>
            <h3>{props.name} </h3>
            <FaAngleUp style={{fontSize:24}} />
        </div>
        <p className='aboutDropdown-text'>{props.text}</p>       
    </article>
  )
}

export default AboutDropdown
