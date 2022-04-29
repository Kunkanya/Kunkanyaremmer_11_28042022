import React from 'react'
import "../util/Banner.css"
import { useState } from "react"

const Banner = (path) => {
  const [bannerPath, setBannerPath] = useState("/asset/background_image.png")

return (
      <div className ="Banner-container">
            <img className="Banner-img" src={bannerPath} alt="slogan"></img>
            <h1 className="Banner-slogan">Chez vous, partout et ailleurs</h1>
    </div>
    )
}

export default Banner
