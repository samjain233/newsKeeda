import React, { Component } from 'react';
import spinnerGif from "./Spinner.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={spinnerGif} alt="spinner img" />
      </div>
    )
  }
}
