import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Apartment.css'
import Tag from '../../component/Tag'
import Star from '../../component/Star'
import AboutDropdown from '../../component/Dropdown'
import Carousel from '../../component/Carousel'
import Error404 from '../Error404'
import Loading from '../../component/Loading'
import Avatar from '../../component/Avatar'

const Apartment = () => {
  const { id } = useParams()
  const redStar = 5
  /**Get id from URL to check if {id} existed */
  let location = window.location.href
  let checkId = location.substr(32)

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  console.log(id)

  useEffect(() => {
      fetch('http://localhost:8000/apartments')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        /**  check if {id} found in Json data.*/
        const apartmentData = data.find((item) => item.id === checkId)
        /** If yes store data in apartmentData */
       setData(apartmentData)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err.message)
      })
    
 
  }, [checkId])

  const apartmentData = data

  return (
    /**Check if parameter {id} is the same as checkId from window.location.href
     * if ApartmentData is undefined and checkId isn´t the same as {id} so show the
     * 404 page otherwise who the apartment page with data from apartmentData.
     */

    isLoading ? (
      <Loading />
    ) : (
      <>
        {apartmentData === null ? (
          <Error404 />
        ) : (
          <>
            <section className="apartment-wrapper">
              <section key={apartmentData.id} className="apartment-container">
                {/**Add gallery carousel component  */}
                <Carousel imageArr={apartmentData.pictures} />

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
                  <Avatar host={apartmentData.host}  />
                    <div className="star-container">
                      {/**Create rating-star by checking how many red-star and gray-star we need
                       * then passing props. through the component <Star /> */}
                      {apartmentData.rating === 5 ? (
                        <Star color="red" n={redStar} />
                      ) : (
                        <>
                          {/*red star*/}
                          <Star color="red" n={apartmentData.rating} />
                          {/*gray star*/}
                          <Star
                            color="#E3E3E3"
                            n={redStar - parseInt(apartmentData.rating)}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </section>

                {/** Profil-contents section*/}
                <article className="article-container">
                  <AboutDropdown
                    name="Description"
                    text={apartmentData.description}
                  />
                  <AboutDropdown
                    name="Équipements"
                    text={apartmentData.equipments.map((list, index) => {
                      return <p key={index}>{list}</p>
                    })}
                  />
                </article>
              </section>
            </section>
          </>
        )}
      </>
    )
  )
}

export default Apartment
