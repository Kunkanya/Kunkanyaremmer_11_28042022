import React, { Fragment } from 'react'
import Logements from '../asset/logements.json'
import { useParams } from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'
import '../util/Apartment.css'
import Tag from '../component/Tag'
import Star from '../component/Star'
import AboutDropdown from '../component/AboutDropdown'

const Apartment = (props) => {
  const { id } = useParams()

  return (
    <Fragment>
      <Header />
      <section className="apartment-wrapper">
        {Logements.map((item) => {
          return !(item.id === id) ? null : (
            <section key={item.id} className="apartment-container">
              <figure className="apartment-gallery">
                <img
                  src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
                  alt="cover"
                />
              </figure>
              <section className="apartment-header">
                <div className="apartment-name_container">
                  <h1>{item.title}</h1>
                  <h4>{item.location}</h4>
                  {/** Tags section by calling tag componet and passing props.tag_name*/}
                  <ul className="tags-container">
                    {item.tags.map((tag) => {
                      return <Tag key={tag} tag_name={tag} />
                    })}
                  </ul>
                </div>

                <div className="avatar-wrapper">
                  <div className="avatar-container">
                    <p>{item.host.name}</p>
                    <div className="avatar">
                      <img src={item.host.picture} alt="avatar" />
                    </div>
                  </div>
                  <div className="star-container">
                      {/**Create rating-star by checking how many red-star and gray-star we need
                       * then passing props. through the component <Star /> */}
                      { (item.rating === 5)? <Star  color ="red" n="5"/> : 
                      <Fragment>
                                 <Star  color ="red" n={item.rating}/>   
                                 <Star  color ="#E3E3E3" n={5 - parseInt(item.rating)}/>   
                      </Fragment>                              }
                  </div>
                </div>
              </section>

              <article className='article-container'>
                      <AboutDropdown name="Desctiption" text={item.description} />
                      <AboutDropdown name="Équipements" text={
                        item.equipments.map((list, index)=>{
                          return(
                              <p key={list}>{list}</p>
                          )
                        })
                        } />

              </article>
            </section>
          )
        })}
      </section>
      <Footer />
    </Fragment>
  )
}

export default Apartment
