import React from 'react'
import logements from '../asset/logements.json'
import '../util/Thumbnail.css'

const Thumbnail = () => {
  return (
    <section className='thumbnail-wrapper'>
      {/*Add image of each appartment in thumnail size : using map mehtod*/}
      {logements.map((item) => {
        return (
          <figure key= {item.id} className="figure-container">
            <img src={item.cover} alt={item.title} />
            <figcaption>{item.title}</figcaption>
          </figure>
        )
        })
      }
    </section>
  )
}

export default Thumbnail
