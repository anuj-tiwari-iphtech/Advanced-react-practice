import React from "react";

class Counter extends React.Component{

    state = {
        count : 0
    }

    increment = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count : this.state.count -1
        })
    }

    render(){
        return(
            <>
                <h1>Counter</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment
                </button>
                <button onClick={this.decrement}>
                    Decrement
                </button>
            </>
        )
    }
}

export default Counter

