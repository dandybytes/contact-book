import React, { Component } from "react";
import { connect } from "react-redux";
import { loadDefaultContacts } from './../actions/actions';
import "./ContactList.css";
import ContactItem from "./ContactItem";

class ContactList extends Component {
  componentDidMount() {
    if (this.props.contacts.contacts.length === 0) {
      this.props.loadDefaultContacts()
    }
  }
  
  render() {
    const { contacts } = this.props.contacts;
    return (
      <ul className="contact-list">
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ contacts }) => ({ contacts });

export default connect(
  mapStateToProps,
  {loadDefaultContacts}
)(ContactList);
