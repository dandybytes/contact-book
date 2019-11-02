import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deleteContact} from "../actions/actionsContacts";
import "./ContactItem.css";

class ContactItem extends Component {
    state = {showDetails: false};

    toggleDetails = () => this.setState(prevState => ({showDetails: !prevState.showDetails}));

    render() {
        const {id, firstName, lastName, email, phone} = this.props.contact;
        return (
            <li className="contact-list-item">
                <div className="contact-list-item-headline">
                    <div className="contact-list-item-headline-left" onClick={this.toggleDetails}>
                        <h3 className="contact-list-item-title">
                            {this.props.settings.nameFormat === "first-last"
                                ? `${firstName} ${lastName}`
                                : `${lastName} ${firstName}`}
                        </h3>
                        {this.state.showDetails ? (
                            <i
                                className="fas fa-caret-up details-icon"
                                // onClick={this.toggleDetails}
                            />
                        ) : (
                            <i
                                className="fas fa-caret-down details-icon"
                                // onClick={this.toggleDetails}
                            />
                        )}
                    </div>
                    <div className="contact-list-item-headline-right">
                        <Link to={`/edit/${id}`}>
                            <i className="fas fa-edit edit-icon" />
                        </Link>
                        <i
                            className="fas fa-times remove-icon"
                            onClick={() => this.props.deleteContact(id)}
                        />
                    </div>
                </div>

                {this.state.showDetails && (
                    <ul className="contact-data">
                        <li className="contact-data-entry">
                            {" "}
                            <i className="fas fa-at" /> {email}
                        </li>
                        <li className="contact-data-entry">
                            {" "}
                            <i className="fas fa-phone" /> {phone}
                        </li>
                    </ul>
                )}
            </li>
        );
    }
}

const mapStateToProps = state => ({settings: state.settings});

export default connect(
    mapStateToProps,
    {deleteContact}
)(ContactItem);
