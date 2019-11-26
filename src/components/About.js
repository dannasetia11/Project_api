import React, { Component } from "react";
import ComponentMount from "./ComponentMount";

export default class About extends Component {
  render() {
    return (
      <div>
        <p>Ini adalah About</p>
        <ComponentMount />
      </div>
    );
  }
}
