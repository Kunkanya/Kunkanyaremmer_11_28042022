import React from 'react'
import Header from '../component/Header'

/**
 * Show error page with error 404 in case URL doesn´t exist.
 * @returns JSX object
 */
const Error404 = () => {
    const styleObj = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
    <div>
        <Header />
        <div style={styleObj} className='error-container'>
            <h1 style={{fontSize : 288 , color : 'red' }}>404</h1>
            <h2 style ={{color: 'red'}}>
                Oups! La page que vous demandez n'existe pas.
            </h2>
        </div>
    </div>
  )
}

export default Error404
