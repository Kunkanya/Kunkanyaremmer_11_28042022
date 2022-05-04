import React, { useState } from 'react'
import '../util/AboutDropdown.css'
import {FaAngleDown} from 'react-icons/fa'

/**
 * Component dropdown box to show in about page with description for each service{props.name}.
 * @param {string} props.name 
 */
const AboutDropdown = (props) => {
const [isShow, setShow] = useState(false)

  return (
    <article className='aboutDropdown-container'>
        <div className='aboutDropdown-header'>
            <h3>{props.name} </h3>
            <FaAngleDown 
              onClick={() =>
                setShow(!isShow)
              } 
              className={isShow? 'animate' : 'notAnimate'}
              style={{fontSize:24}} />
            
        </div>
        {
          isShow ? <div className='aboutDropdown-text'>{props.text}</div> : null
        }       
    </article>
  )
}

export default AboutDropdown