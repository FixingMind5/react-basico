import React from 'react';

import './styles/NotFound.css'

const NotFound = () => (
    <div className="NotFound">
        <div className="info">
            <h2 className="info__title">Ups...</h2>
            <p className="info__body">No encontramos lo que buscabas</p>
        </div>
        <img src="https://static.platzi.com/static/images/error/img404.png" alt="astronaut"/>
    </div>
)

export default NotFound;