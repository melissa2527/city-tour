import React, { Component } from 'react'

export default class TourInfo extends Component {
    {tour} = this.props.tour;
    state = {
        showInfo: false
    }
    render() {
        return (
            <div>
                <h5>info {""}
                    <span onClick={handleClick}>
                        <i className="fas fa-caret-square-down"/>
                    </span>
                </h5>
                {this.state.showInfo && 
                <p>{tour.info}</p>
                }
            </div>
        )
    }
}

 {/* <h5>info 
                        <span onClick={() => !showInfo}>
                            <i className="fas fa-caret-square-down"/>
                        </span>
                    </h5> */}
                    {/* {(showInfo === true) ?
                        <p>{tour.info}</p>
                     : null } */}