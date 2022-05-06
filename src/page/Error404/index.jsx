import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'
/**
 * Show error page with error 404 in case URL doesn´t exist.
 * @returns JSX object
 */

const Error404 = () => {
   
    return (
        <div  className='error-container'>
            <h1 style={{fontSize : 244 , color : 'red' }}>404</h1>
            <h2 style ={{fontSize : 36, color: 'red'}}>
                Oups! La page que vous demandez n'existe pas.
            </h2>
            <Link to ="/" className='back-home' >Retourner sur la page d’accueil</Link>
            <p></p>
        </div>
  )
}

export default Error404
