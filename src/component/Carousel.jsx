import React, { useState } from 'react'
import '../util/Carousel.css'
import { MdArrowForwardIos } from 'react-icons/md'
import { MdArrowBackIosNew } from 'react-icons/md'

const Carousel = ({ imageArr }) => {
  const [current, setCurrent] = useState(0)
  const length = imageArr.length
  console.log(length)

  const prevSlide = () => {
    setCurrent(current === 0 ? 4 : current-1)
}
  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current +1)
  }

  return (  
    <div
      className="carousel-container"
      style={{ backgroundImage: `url(${imageArr[current]})` }}
    >
      <MdArrowBackIosNew className="btn next" onClick={prevSlide} />
      <h3 className="center"> {current +1 }/{length-1}</h3>
      <MdArrowForwardIos className="btn prev" onClick={nextSlide} />
    </div>

  )
}

export default Carousel
