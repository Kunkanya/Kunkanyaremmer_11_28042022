import React from 'react'
import { RiStarFill } from 'react-icons/ri'

const Star = () => {
    const rating = 2
    const grayStar = 5 - rating
  return (
    <div>
        {rating.map(item =>{return( <RiStarFill style={{color:"star-red"}} />)})}
        {grayStar.map(item => {return( <RiStarFill style={{color:"star-gray"}} />)})}

    </div>
  )
}

export default Star

