// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component{
    constructor(){
        super();
        this.state ={
            hasBeenClicked: 0
        };
    }
    handleClick = () => {
        this.setState(previousState => {
            return {
                count: previousState.count + 1
            }
        })
    }

    
    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked! </p>
                <button onClick={this.handleClick}>Click me!</button>
                <p>{this.state.handleClick}</p>
            </div>
        );
    }
}

export default ClickityClick