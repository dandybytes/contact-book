import "./App.css";
import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import rootReducer from "./reducers/reducerRoot";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import Favorites from "./components/Favorites";
import Blocked from "./components/Blocked";
import About from "./components/About";
import NotFound from "./components/NotFound";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <main>
              <Switch>
                <Route path="/" exact component={ContactList} />
                <Route path="/add" exact component={AddContact} />
                <Route path="/favorite" exact component={Favorites} />
                <Route path="/blocked" exact component={Blocked} />
                <Route path="/about" exact component={About} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
