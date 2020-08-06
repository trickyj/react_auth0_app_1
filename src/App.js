import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Auth from "./Auth/Auth";
import Callback from "./Callback";
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
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Nav auth={this.auth} />
        <div className="body">
          <Route
            path="/"
            exact
            render={(props) => <Home auth={this.auth} {...props} />}
          />
          <Route
            path="/callback"
            render={(props) => <Callback auth={this.auth} {...props} />}
          />
          <Route
            path="/profile"
            render={(props) =>
              this.auth.isAuthenticated() ? (
                <Profile auth={this.auth} {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </div>
      </>
    );
  }
}
export default App;
