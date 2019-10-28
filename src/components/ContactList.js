import React, {Component} from "react";
import {connect} from "react-redux";
import {loadDefaultContacts} from "../actions/actionsContacts";
import ContactItem from "./ContactItem";
import Pagination from "./common/Pagination";
import "./ContactList.css";

class ContactList extends Component {
    // uses the raw list of available contacts and...
    // ...returns a filtered and sorted list of contacts ready to display
    processContacts = () => {
        const {statusFilter} = this.props.settings;
        let contacts = [];
        if (statusFilter === "all") {
            contacts = [...this.props.contacts.contacts];
        } else {
            contacts = this.props.contacts.contacts.filter(
                contact => contact.status === statusFilter
            );
        }

        if (this.props.settings.sortBy === "first-name") {
            contacts.sort((a, b) =>
                a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1
            );
        } else if (this.props.settings.sortBy === "last-name") {
            contacts.sort((a, b) => (a.lastName.toLowerCase() < b.lastName.toLowerCase() ? -1 : 1));
        }
        return contacts || [];
    };

    render() {
        const contacts = this.props.contacts.contacts.length > 0 ? this.processContacts() : [];
        const {currentPage, itemsPerPage} = this.props.pagination;

        // Pagination sets first page to 1 rather than 0 --> pageNum = index + 1
        const contactsToShow = contacts.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );

        return (
            <React.Fragment>
                {contacts.length > 0 ? (
                    <ul className="contact-list">
                        {contactsToShow.map(contact => (
                            <ContactItem key={contact.id} contact={contact} />
                        ))}
                    </ul>
                ) : (
                    <div className="no-contacts">
                        <div className="no-contacts-message">
                            <h3>You have no contacts to display.</h3>
                            <p>
                                Please use the "ADD" menu to create new contacts or load a sample
                                list by clicking the button below.
                            </p>
                        </div>
                        <button
                            className="load-default-conctacts-button"
                            onClick={this.props.loadDefaultContacts}
                        >
                            load sample contact list
                        </button>
                    </div>
                )}
                {contacts.length > itemsPerPage && (
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        totalItems={contacts.length}
                    />
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({contacts, settings, pagination}) => ({contacts, settings, pagination});

export default connect(mapStateToProps, {loadDefaultContacts})(ContactList); //prettier-ignore
