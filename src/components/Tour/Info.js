import React, {Component} from "react";


class Info extends Component {
    state = {
        showInfo: false,
    }
    
    toggleShowInfo = () => {
        this.setState(prevState => {
            return {
                showInfo: !prevState.showInfo
            }
        })
    }
    
    render() {
        return (
            <div className="info">
                <h5>info <span>
                    <i onClick={this.toggleShowInfo} className="fas fa-caret-square-down"/>
                    </span>
                    {this.state.showInfo ? 
                    <p>{this.props.info}</p>:
                    null}
                </h5>
                
            </div>
        )
    }
}

export default Info