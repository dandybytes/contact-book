import React, {Component} from "react";
import {connect} from "react-redux";
import {loadDefaultContacts} from "../actions/actionsContacts";
import "./ContactList.css";
import SettingsBar from "./SettingsBar";
import ContactItem from "./ContactItem";
import Pagination from "./Pagination";

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

        return (
            <React.Fragment>
                <SettingsBar />
                {contacts.length > 0 ? (
                    <React.Fragment>
                        <ul className="contact-list">
                            {contacts.map(contact => (
                                <ContactItem key={contact.id} contact={contact} />
                            ))}
                        </ul>
                        <Pagination
                            currentPage={currentPage}
                            itemsPerPage={itemsPerPage}
                            totalItems={contacts.length}
                        />
                    </React.Fragment>
                ) : (
                    <div className="no-contacts">
                        <p className="no-contacts-message">
                            You have no contacts to display. Please use the "ADD" menu to create new
                            contacts or load a sample list by clicking the button below.
                        </p>
                        <button
                            className="load-default-conctacts-button"
                            onClick={this.props.loadDefaultContacts}
                        >
                            load sample contact list
                        </button>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({contacts, settings, pagination}) => ({contacts, settings, pagination});

export default connect(mapStateToProps, { loadDefaultContacts })(ContactList); //prettier-ignore
