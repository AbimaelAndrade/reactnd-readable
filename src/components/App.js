import React, { Component } from "react";
import { connect } from "react-redux";
import { handleIncialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleIncialData());
  }

  render() {
    return (
      <div>
        <p>Learn React</p>
      </div>
    );
  }
}

export default connect()(App);
