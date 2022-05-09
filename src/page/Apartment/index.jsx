import React, { Fragment } from 'react'
import Logements from '../../asset/logements.json'
import { useParams } from 'react-router-dom'
import './Apartment.css'
import Tag from '../../component/Tag'
import Star from '../../component/Star'
import AboutDropdown from '../../component/Dropdown'
import Carousel from '../../component/Carousel'
import Error404 from '../Error404'

const Apartment = () => {
  const { id } = useParams() 
  let location = window.location.href 
  let checkId = location.substr(32)
  
  let apartmentData =   Logements.find(logement => logement.id === checkId )
  
  return (
  /**Check if parameter {id} is the same as checkId from window.location.href 
   * if ApartmentData is undefined and checkId isn´t the same as {id} so show the
   * 404 page otherwise who the apartment page with data from apartmentData.
  */
  apartmentData === undefined && checkId !== id ? <Error404 /> : 
    <Fragment>
      <section className="apartment-wrapper">
            <section key={apartmentData.id} className="apartment-container">
              {/**Add gallery carousel component  */}
              <Carousel imageArr = {apartmentData.pictures} />
              
              <section className="apartment-header">
                <div className="apartment-name_container">
                  <h1>{apartmentData.title}</h1>
                  <h4>{apartmentData.location}</h4>
                  {/** Tags section by calling tag componet and passing props.tag_name*/}
                  <ul className="tags-container">
                    {apartmentData.tags.map((tag) => {
                      return <Tag key={tag} tag_name={tag} />
                    })}
                  </ul>
                </div>
                
                {/** Profil-Avatar section*/}
                <div className="avatar-wrapper">
                  <div className="avatar-container">
                    <p>{apartmentData.host.name}</p>
                    <div className="avatar">
                      <img src={apartmentData.host.picture} alt="avatar" />
                    </div>
                  </div>
                  <div className="star-container">
                      {/**Create rating-star by checking how many red-star and gray-star we need
                       * then passing props. through the component <Star /> */}
                      { (apartmentData.rating === 5)? <Star  color ="red" n="5"/> : 
                      <Fragment>
                                 <Star  color ="red" n={apartmentData.rating}/>   
                                 <Star  color ="#E3E3E3" n={5 - parseInt(apartmentData.rating)}/>   
                      </Fragment>                              }
                  </div>
                </div>
              </section>
              
              {/** Profil-contents section*/}
              <article className='article-container'>
                      <AboutDropdown name="Desctiption" text={apartmentData.description} />
                      <AboutDropdown name="Équipements" text={
                        apartmentData.equipments.map((list, index)=>{
                          return(
                              <p key={list}>{list}</p>
                          )
                        })
                        } />

              </article>
            </section>
      </section>
    </Fragment>
  )
}

export default Apartment
