import React from 'react'
//import logements from '../../asset/logements.json'
import './Thumbnail.css'
import { Link } from 'react-router-dom'

const Thumbnail = ({ apartmentsData }) => {

  return (
    <section className="thumbnail-wrapper">
      {/*Add image of each appartment in thumnail size : using map mehtod*/}
      {apartmentsData.map((item) => {
        return (
          <Link key={item.id} to={`/Apartment/${item.id}`}>
            <figure  className="figure-container">
              <img src={item.cover} alt={item.title} />
              <figcaption>{item.title}</figcaption>
            </figure>
          </Link>
        )
      })}
    </section>
  )
}

export default Thumbnail