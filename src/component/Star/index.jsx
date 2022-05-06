import React from 'react'
import { RiStarFill } from 'react-icons/ri'

const Star = (props) => {
  let n = parseInt(props.n)
  const colorStyle ={    
    color: props.color ,
    fontSize : "24px",
    margin: "5px"
  }
  
  /**run loop n times to crate star in new array */
  return (
    [...Array(n).keys()].map((item,index)=>(
      <RiStarFill key={index} style={colorStyle} />
    )
    )
  )
  
}
export default Star

