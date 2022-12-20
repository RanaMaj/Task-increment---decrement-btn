import React from "react";
import './style.css'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleIncrement = () => {
        //const count = this.state.count;
        this.setState({ count: this.state.count + 1 });
    };

    handleDecrement = () => {
        const count = this.state.count;
        count <= 0 ? this.setState({ count: this.state.count - 0 }) : this.setState({ count: this.state.count - 1 });

    };

    Sumation = () => { }

    render() {
        return (
            <div className="container">
                <span>{this.state.count}</span>
                <button className="decrementBtn" onClick={this.handleDecrement}> - </button>
                <button className="incrementBtn" onClick={this.handleIncrement}> + </button>
                <span>{this.setState.Sumation}</span>
            </div>
        );
    }
}

export default Counter;
