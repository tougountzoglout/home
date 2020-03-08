import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterButton extends Component {

    constructor() {

        super();
        this.state =

        {
            counter: 0
        }
    }

    render() {
        return (
            <div className="CounterButton">
               
                <button className="but" onClick={this.increment}> {this.props.signal} {this.props.by}</button>
                {/* <span><h1>{this.state.counter}</h1></span> */}
            </div>
        );


    }

    increment = () => {

        this.setState({ counter: this.state.counter + this.props.by });
        this.props.incrementMethod(this.props.by);
    }


    decrement = () => {

        this.setState({ counter: this.state.counter - this.props.by });
        this.props.incrementMethod(this.props.by);
    }
}



CounterButton.defaultProps = {
    by: 1,
    signal : "+"
}

CounterButton.propTypes = {
    by: PropTypes.number,
    signal: PropTypes.string
}


export default CounterButton;