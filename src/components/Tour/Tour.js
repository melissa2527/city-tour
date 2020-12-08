import React from 'react';
import './Tour.scss';
import Favorite from './Favorite';
import Info from './Info';
import Price from './Price';

function Tour({tour}) {
  
    return (
        <article className="tour">
            <div className="tour-img">
                <img src={tour.img} alt={tour.city} />
                <span className="close-btn">
                    <i className="fas fa-window-close" />
                </span>
            </div>
            <div className="tour-info">
                    <h3>{tour.city}</h3>
                    <h4>{tour.name}</h4>
                    <Info info={tour.info}/>
                    <Price price={tour.price} /> 
            </div>
            <Favorite />
        </article>
    )
}

export default Tour

