import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Auth from "./Auth/Auth";
// import logo from './logo.svg';
// import './App.css';

// function App() {
// return (
// <div className="App">
// {/* <header className="App-header"> */}
// {/* <img src={logo} className="App-logo" alt="logo" /> */}
// {/* <p> */}
// {/* Edit <code>src/App.js</code> and save to reload. */}
// {/* </p> */}
// {/* <a */}
// {/* className="App-link" */}
// {/* href="https://reactjs.org" */}
// {/* target="_blank" */}
// {/* rel="noopener noreferrer" */}
// {/* > */}
// {/* Learn React */}
// </a>
// {/* </header> */}
// </div>
// );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.hisotry);
  }
  render() {
    return (
      <>
        <Nav />
        <div className="body">
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </div>
      </>
    );
  }
}
export default App;
