import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h1>Hello Counter!</h1>
        <h3>{this.state.counter}</h3>
        <button onClick={this.handleOnClick}>+1</button>
      </div>
    );
  }
}

export default Counter;
