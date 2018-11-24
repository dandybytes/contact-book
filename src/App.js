import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import Favorites from "./components/Favorites";
import Blocked from "./components/Blocked";
import About from "./components/About";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <Switch>
              <Route path="/" exact component={ContactList} />
              <Route path="/add" exact component={AddContact} />
              <Route path="/favorite" exact component={Favorites} />
              <Route path="/blocked" exact component={Blocked} />
              <Route path="/about" exact component={About} />
              <Route component={NotFound} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
