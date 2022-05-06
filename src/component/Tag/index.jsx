import React from 'react'
import './Tag.css'

const Tag = (props) => {
  return (
    <li className= "tag">{props.tag_name}</li>
  )
}

export default Tag
