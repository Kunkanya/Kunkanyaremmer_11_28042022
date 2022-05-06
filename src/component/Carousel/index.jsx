import React, { useState } from 'react'
import './Carousel.css'
import { MdArrowForwardIos } from 'react-icons/md'
import { MdArrowBackIosNew } from 'react-icons/md'

const Carousel = ({ imageArr }) => {
  const [current, setCurrent] = useState(0)
  const length = imageArr.length

  const prevSlide = () => {
    setCurrent(current === 0 ? length-1 : current-1)
}
  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current +1)
  }

  return (  
    <div
      className="carousel-container"
      style={{ backgroundImage: `url(${imageArr[current]})` }}
    >
      {/**check if there is only 1 img- we do not show the prev and next buttons */}
      {length === 1 ? "" :<MdArrowBackIosNew className="btn next" onClick={prevSlide} /> }
      <h3 className="center"> {current+1}/{length}</h3>
      {length === 1 ? "": <MdArrowForwardIos className="btn prev" onClick={nextSlide} /> }
    </div>

  )
}

export default Carousel
