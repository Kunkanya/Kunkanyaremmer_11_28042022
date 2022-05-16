import React, { useState, useEffect } from 'react'
import Banner from '../../component/Banner/index.jsx'
import Thumbnail from '../../component/Thumbnail/index'
import Loading from '../../component/Loading/index.jsx'
import './Home.css'
/**
 * Home
 */

function Home() {
  const sloganText = 'Chez vous, partout et ailleurs'
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  
  useEffect(() => {
      fetch('http://localhost:8000/apartments')
        .then((res) => {
          console.log('res',res)
          return res.json()
        })
        .then((data) => {
          setData(data)
          setLoading(false)
        })
        .catch((err) => {
          console.log(err.message)
        })
  }, [])

 /*Senario the server takes long to load data 
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/apartments')
        .then((res) => {
          console.log(res)
          return res.json()
        })
        .then((data) => {
          setData(data)
          console.log(data)
          setLoading(false)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }, 2000)
  }, []) */

  return (
    <>
      {isLoading && <Loading />}
      {data && (
        <div className="Home">
          <div className="home-banner">
            <Banner
              path="/asset/background_image.png"
              slogan={sloganText}
              className="home-banner"
            />
          </div>
          <Thumbnail apartmentsData={data} />
        </div>
      )}
    </>
  )
}

export default Home
