import React, {Component} from "react";
import {Provider} from "react-redux";
import store from "./store/store";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import About from "./components/About";
import NotFound from "./components/NotFound";
import "./App.css";

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
                                <Route path="/contacts" component={Home} />
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
