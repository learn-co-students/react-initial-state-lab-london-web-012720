import React, { Component } from "react";

class Bomb extends Component {
  constructor(props) {
    super();
    this.state = { secondsLeft: props.initialCount };
  }
  render() {
    const output =
      this.state.secondsLeft !== 0 ? (
        <p>
          <span>{this.state.secondsLeft} </span>
          seconds left before I go boom!
        </p>
      ) : (
        <p>Boom!</p>
      );
    return <div>{output}</div>;
  }
}

export default Bomb;
