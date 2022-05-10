import React from 'react'
import "./Banner.css"

/**
 * Component to show different banner for Home and About.
 * @param {String} path 
 * @returns 
 */
const Banner = ({path , slogan}) => {

const mobileStyle={
      
}
return (
      <div className ="Banner-container">
            <img className="Banner-img" src={path} alt="Banner"></img>
            <h1 className="Banner-slogan">{slogan}</h1>
    </div>
    )
}

export default Banner
