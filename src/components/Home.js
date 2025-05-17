import React, {Component} from "react";
import SettingsBar from "./SettingsBar";
import ContactList from "./ContactList";
import "./Home.css";

class Home extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <SettingsBar />
                <ContactList />
            </React.Fragment>
        );
    }
}

export default Home;
