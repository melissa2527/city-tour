import React, {Component} from "react";
import './Favorite.scss';

class Favorite extends Component {
    state = {
        isFavorited: false
    }
    
    toggleFavorite = () => {
        this.setState(prevState => {
            return {
                isFavorited: !prevState.isFavorited
            }
        })
    }
    
    render() {
        return (
            <div className="favorite">
                {this.state.isFavorited ? <h5>This tour has been added to favorites</h5> : <h5>Click heart to favorite</h5>}
                    <span 
                        className="heart" onClick={this.toggleFavorite}>
                        {this.state.isFavorited ? "❤️" : "♡"}
                    </span>
            </div>
        ) 
    }
}

export default Favorite