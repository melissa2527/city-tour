import React, {useState, useEffect} from 'react';
import './Tour.scss';
import TourInfo from './TourInfo';

function Tour({tour}) {
    // const [showInfo, setShowInfo] = useState(false);

    // handleClick = (e) => {
    //     e.target.value = setShowInfo(true)
    // }

   
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
                    <TourInfo tour={tour} />
                    {/* <h5>info 
                        <span onClick={() => !showInfo}>
                            <i className="fas fa-caret-square-down"/>
                        </span>
                    </h5> */}
                    {/* {(showInfo === true) ?
                        <p>{tour.info}</p>
                     : null } */}
            </div>
        </article>
    )
}

export default Tour

