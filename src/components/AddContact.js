import React, {Component} from "react";
import {connect} from "react-redux";
import {addContact} from "../actions/actionsContacts";
import "./AddContact.css";

class AddContact extends Component {
    state = {firstName: "", lastName: "", email: "", phone: ""};

    handleInputChange = e => this.setState({[e.target.name]: e.target.value.trim()});

    handleFormSubmit = e => {
        e.preventDefault();
        const {firstName, lastName, email, phone} = this.state;
        const newContact = {firstName, lastName, email, phone};
        this.props.addContact(newContact);
        this.setState({firstName: "", lastName: "", email: "", phone: ""});
        this.props.history.push("/contacts");
    };

    render() {
        return (
            <div className="add-contact-container">
                <form className="add-contact-form" onSubmit={this.handleFormSubmit}>
                    <label htmlFor="input-first-name">First Name</label>
                    <input
                        type="text"
                        id="input-first-name"
                        name="firstName"
                        required
                        className="add-contact-input"
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="input-first-name">Last Name</label>
                    <input
                        type="text"
                        id="input-last-name"
                        name="lastName"
                        required
                        className="add-contact-input"
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="input-email">Email</label>
                    <input
                        type="email"
                        id="input-email"
                        name="email"
                        className="add-contact-input"
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="input-phone">Phone</label>
                    <input
                        type="tel"
                        id="input-phone"
                        name="phone"
                        className="add-contact-input"
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="submit"
                        value="Add Contact"
                        className="input-submit"
                        id="input-submit"
                    />
                    <input type="reset" className="input-reset" id="input-reset" />
                </form>
            </div>
        );
    }
}

export default connect(
    null,
    {addContact}
)(AddContact);
