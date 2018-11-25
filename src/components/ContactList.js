import React, { Component } from "react";
import { contacts } from "../contacts/sample-contacts";
import "./ContactList.css";
import ContactItem from "./ContactItem";

class ContactList extends Component {
  state = {};
  render() {
    return (
      <ul className="contact-list">
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    );
  }
}

export default ContactList;
