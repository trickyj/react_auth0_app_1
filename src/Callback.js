import React, { Component } from "react";
import { logRoles } from "@testing-library/react";

class Callback extends Component {
  componentDidMount = () => {
    //Handle authentication if expected values are in the URL

    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL.");
    }
  };
  render() {
    return <h1>loading...</h1>;
  } 
}

export default Callback;

