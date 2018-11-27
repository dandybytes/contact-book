import "./App.css";
import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import rootReducer from "./reducers/reducerRoot";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
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
                <Redirect from="/" exact to="/about" />
                <Route path="/contacts" component={ContactList} />
                <Route path="/add" component={AddContact} />
                <Route path="/edit/:id" component={EditContact} />
                <Route path="/about" component={About} />
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
