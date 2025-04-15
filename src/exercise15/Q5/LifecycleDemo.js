import React, { Component } from "react";

class LifecycleDemo extends Component { constructor(props) {
super(props);
this.state = { count: 0 };
console.log("Constructor: Component is being initialized.");
}

componentDidMount() {
console.log("componentDidMount: Component mounted to the DOM.");
}

componentDidUpdate(prevProps, prevState) {
console.log("componentDidUpdate: Component updated.");
console.log(`Previous State: ${prevState.count}, Current State:
${this.state.count}`);
}

componentWillUnmount() {
console.log("componentWillUnmount: Component is being removed from the DOM.");
}

incrementCount = () => {
this.setState({ count: this.state.count + 1 });
};

render() { return (
    <div>
    <h2>Lifecycle Demo</h2>
    <p>Count: {this.state.count}</p>
    <button onClick={this.incrementCount}>Increment Count</button>
    </div>
    );
    }
    }
    
    export default LifecycleDemo;
    