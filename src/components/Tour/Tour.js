import React from 'react';
import './Tour.scss';

function Tour() {
    return (
        <article className="tour">
            <div className="tour-img">
                <img src="" alt="" />
                <span className="close-btn">
                    <i className="fas fa-window-close" />
                </span>
            </div>
            <div className="tour-info">
                <h3>city</h3>
                <h4>Tour name</h4>
                <h5>info 
                    <span>
                        <i className="fas fa-caret-square-down"/>
                    </span>
                </h5>
                <p>Lorem ipsum</p>
            </div>
        </article>
    )
}

export default Tour
