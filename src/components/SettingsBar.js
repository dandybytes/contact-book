import React, {Component} from "react";
import {connect} from "react-redux";
import {
    formatNameFirstLast,
    formatNameLastFirst,
    sortByFirstName,
    sortByLastName,
    showFavorite,
    showNeutral,
    showBlocked,
    showAll
} from "../actions/actionsSettings";
import {setItemsPerPage, setCurrentPage} from "../actions/actionsPagination";

import "./SettingsBar.css";

class SettingsBar extends Component {
    state = {};

    handleSelect = e => {
        switch (e.target.value) {
            case "first-last":
                this.props.formatNameFirstLast();
                break;
            case "last-first":
                this.props.formatNameLastFirst();
                break;
            case "first-name":
                this.props.sortByFirstName();
                break;
            case "last-name":
                this.props.sortByLastName();
                break;
            case "favorite":
                this.props.showFavorite();
                break;
            case "neutral":
                this.props.showNeutral();
                break;
            case "blocked":
                this.props.showBlocked();
                break;
            case "all":
                this.props.showAll();
                break;
            case "5":
            case "10":
            case "20":
            case "50":
                this.props.setItemsPerPage(parseInt(e.target.value));
                //reset the page to prevent blank pages when switching from fewer items/page to more items/page
                this.props.setCurrentPage(1);
                break;
            default:
                return;
        }
    };

    render() {
        const contactsPerPage = this.props.pagination.itemsPerPage;

        return (
            <div className="settings-bar">
                <div className="setting">
                    <label className="setting-label" htmlFor="select-name-format">
                        name format
                    </label>
                    <select name="format" id="select-name-format" onChange={this.handleSelect}>
                        <option value="first-last" autoFocus>
                            first, last
                        </option>
                        <option value="last-first">last, first</option>
                    </select>
                </div>

                <div className="setting">
                    <label className="setting-label" htmlFor="select-sort-by">
                        sort by
                    </label>
                    <select name="sort-by" id="select-sort-by" onChange={this.handleSelect}>
                        <option value="">- choose -</option>
                        <option value="first-name">first name</option>
                        <option value="last-name">last name</option>
                    </select>
                </div>

                <div className="setting">
                    <label className="setting-label" htmlFor="select-filter-status">
                        status filter
                    </label>
                    <select
                        name="filter-status"
                        id="select-filter-status"
                        onChange={this.handleSelect}
                    >
                        <option value="all">all</option>
                        <option value="favorite">favorite</option>
                        <option value="neutral">neutral</option>
                        <option value="blocked">blocked</option>
                    </select>
                </div>

                <div className="setting">
                    <label className="setting-label" htmlFor="select-items-per-page">
                        contacts per page
                    </label>
                    <select
                        name="format"
                        defaultValue={contactsPerPage}
                        id="select-items-per-page"
                        onChange={this.handleSelect}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>

                {/* <div className="setting">
          <label className="setting-label" htmlFor="select-details-collapse">
            details
          </label>
          <select name="details-collapse" id="select-details-collapse">
            <option value="none">no preference</option>
            <option value="collapse all">collapse all</option>
            <option value="expand all">expand all</option>
          </select>
        </div> */}
            </div>
        );
    }
}

const mapStateToProps = ({contacts, settings, pagination}) => ({contacts, settings, pagination});

export default connect(
    mapStateToProps,
    {
        formatNameFirstLast,
        formatNameLastFirst,
        sortByFirstName,
        sortByLastName,
        showFavorite,
        showNeutral,
        showBlocked,
        showAll,
        setItemsPerPage,
        setCurrentPage
    }
)(SettingsBar);
