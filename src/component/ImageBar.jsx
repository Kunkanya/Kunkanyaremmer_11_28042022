import React from 'react'
import "../util/ImageBar.css"
import BackgroundImage from "../asset/background_image.png"

const ImageBar = () => {
  return (
    <div className ="ImageBar-container">
            <img className="ImageBar-img" src={BackgroundImage} alt="slogan"></img>
            <h1 className="ImageBar-slogan">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default ImageBar
