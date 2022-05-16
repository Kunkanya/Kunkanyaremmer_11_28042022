import React from 'react'
import "./Avatar.css"

const Avatar = ({ host }) => {
    const firstName = host.name.split(' ')[0]
    const lastName = host.name.split(' ')[1]
    return (
        <>
            <div className="avatar-container">
                <div className="avatar-name">
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                </div>
                <figure className="avatar">
                    <img src={host.picture} alt="avatar" />
                </figure>
            </div>
        </>
    )
}

export default Avatar
