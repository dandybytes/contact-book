import React, { Component } from "react";
import "./AddContact.css";

class AddContact extends Component {
  state = {};
  render() {
    return (
      <div className="add-contact-container">
        <form className="add-contact-form">
          <label htmlFor="input-first-name">First Name</label>
          <input
            type="text"
            id="input-first-name"
            required
            className="add-contact-input"
          />
          <label htmlFor="input-first-name">Last Name</label>
          <input
            type="text"
            id="input-last-name"
            required
            className="add-contact-input"
          />
          <label htmlFor="input-email">Email</label>
          <input type="email" id="input-email" className="add-contact-input" />
          <label htmlFor="input-phone">Phone</label>
          <input type="tel" id="input-phone" className="add-contact-input" />
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

export default AddContact;
