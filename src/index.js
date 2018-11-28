import ReactDOM from "react-dom";
import React from "react";

import Counter from "./Counter";
import CounterHook from "./CounterHook";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Counter />
        <CounterHook />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
