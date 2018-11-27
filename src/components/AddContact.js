import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../actions/actions";
import "./AddContact.css";

class AddContact extends Component {
  state = { firstName: "", lastName: "", email: "", phone: "" };

  onFormSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, email, phone } = this.state;
    const newContact = { firstName, lastName, email, phone };
    this.props.addContact(newContact);
    this.setState({ firstName: "", lastName: "", email: "", phone: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="add-contact-container">
        <form className="add-contact-form" onSubmit={this.onFormSubmit}>
          <label htmlFor="input-first-name">First Name</label>
          <input
            type="text"
            id="input-first-name"
            required
            className="add-contact-input"
            onChange={e => this.setState({ firstName: e.target.value })}
          />
          <label htmlFor="input-first-name">Last Name</label>
          <input
            type="text"
            id="input-last-name"
            required
            className="add-contact-input"
            onChange={e => this.setState({ lastName: e.target.value })}
          />
          <label htmlFor="input-email">Email</label>
          <input
            type="email"
            id="input-email"
            className="add-contact-input"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label htmlFor="input-phone">Phone</label>
          <input
            type="tel"
            id="input-phone"
            className="add-contact-input"
            onChange={e => this.setState({ phone: e.target.value })}
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
  { addContact }
)(AddContact);
