import React, { Component } from "react";
import { connect } from "react-redux";
import { updateContact } from "../actions/actions";

class EditContact extends Component {
  state = { id: "", firstName: "", lastName: "", email: "", phone: "" };

  componentDidMount() {
    if (this.props.contacts.contacts.length === 0) {
      this.props.history.push("/");
    } else {
      const { id } = this.props.match.params;
      const contact = this.props.contacts.contacts.find(
        contact => contact.id === id
      );
      const { firstName, lastName, email, phone } = contact;
      this.setState({ id, firstName, lastName, email, phone });
    }
  }

  handleInputChange = e => this.setState({ [e.target.name]: e.target.value });

  handleFormSubmit = e => {
    e.preventDefault();
    const { id, firstName, lastName, email, phone } = this.state;
    const newContact = { id, firstName, lastName, email, phone };
    this.props.updateContact(newContact);
    this.setState({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    });
    this.props.history.push("/");
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
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
          <label htmlFor="input-first-name">Last Name</label>
          <input
            type="text"
            id="input-last-name"
            name="lastName"
            required
            className="add-contact-input"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
          <label htmlFor="input-email">Email</label>
          <input
            type="email"
            id="input-email"
            name="email"
            className="add-contact-input"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <label htmlFor="input-phone">Phone</label>
          <input
            type="tel"
            id="input-phone"
            name="phone"
            className="add-contact-input"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
          <input
            type="submit"
            value="Update Contact"
            className="input-submit"
            id="input-submit"
          />
          <input type="reset" className="input-reset" id="input-reset" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ contacts }) => ({ contacts });

export default connect(
  mapStateToProps,
  { updateContact }
)(EditContact);
