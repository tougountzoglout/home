import React, { Component } from 'react';
import CounterButton from './CounterButton';
import './Counter.css';

class Counter extends Component {

    constructor() {

        super();
        this.state =

        {
            counter: 0
        }
        this.increment = this.increment.bind(this)
    }

    render() {
        return (
            <div className="Counter">
                {/* <span id='ones'>
                    <CounterButton  by={1} signal={"+"} incrementMethod={this.increment}></CounterButton>
                    <CounterButton  by={1} signal={"-"} incrementMethod={this.increment}></CounterButton>
                </span> */}
                <span id='one'>
                    <CounterButton  by={1} signal={"+"} incrementMethod={this.increment}></CounterButton>
                    <CounterButton  by={1} signal={"-"} incrementMethod={this.increment}></CounterButton>
                </span>
                <span id='two'>
                    <CounterButton by={5} signal={"+"} incrementMethod={this.increment}></CounterButton>
                    <CounterButton by={5} signal={"-"} incrementMethod={this.decrement}></CounterButton>
                </span>
                <span id='three'>
                    <CounterButton by={10} signal={"+"} incrementMethod={this.increment}></CounterButton>
                    <CounterButton by={10} signal={"-"} incrementMethod={this.decrement}></CounterButton>
                </span >
                <span id="result"><h1>{this.state.counter}</h1></span>
                <span> <button onClick={this.reset}>Reset</button></span>
               
            </div>
        );


    }

    increment(by) {
        // alert ("heloo");

        this.setState({ counter: this.state.counter + by });
    }


    reset = () => {

        this.setState({ counter: 0 });

    }


    decrement = (by) => {

        this.setState({ counter: this.state.counter - by });
    }

}

export default Counter;