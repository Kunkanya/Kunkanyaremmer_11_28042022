import React from 'react'
import '../util/Tag.css'

const Tag = (props) => {
  return (
    <li className= "tag">{props.tag_name}</li>
  )
}

export default Tag
