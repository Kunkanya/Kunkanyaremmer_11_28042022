import React from 'react'
import "./Banner.css"
/**
 * Component to show different banner for Home and About.
 * @param {String} path 
 * @returns 
 */
const Banner = (props) => {

return (
      <div className ="Banner-container">
            <img className="Banner-img" src={props.path} alt="Banner"></img>
            <h1 className="Banner-slogan">Chez vous, partout et ailleurs</h1>
    </div>
    )
}

export default Banner
