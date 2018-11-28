import React, { Component } from "react";
import { connect } from "react-redux";
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
      default:
        break;
    }
  };

  render() {
    // console.log("props in settings bar: ");
    // console.log(this.props);
    return (
      <div className="settings-bar">
        <div className="setting">
          <label className="setting-label" htmlFor="select-name-format">
            name format
          </label>
          <select
            name="format"
            id="select-name-format"
            onChange={this.handleSelect}
          >
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
          <select
            name="sort-by"
            id="select-sort-by"
            onChange={this.handleSelect}
          >
            <option value="" autoFocus>
              - choose -
            </option>
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
            <option value="all" autoFocus>
              all
            </option>
            <option value="favorite">favorite</option>
            <option value="neutral">neutral</option>
            <option value="blocked">blocked</option>
          </select>
        </div>

        {/* <div className="setting">
          <label className="setting-label" htmlFor="select-details-collapse">
            details
          </label>
          <select name="details-collapse" id="select-details-collapse">
            <option value="none" autoFocus>no preference</option>
            <option value="collapse all">collapse all</option>
            <option value="expand all">expand all</option>
          </select>
        </div> */}
      </div>
    );
  }
}

export default connect(
  null,
  {
    formatNameFirstLast,
    formatNameLastFirst,
    sortByFirstName,
    sortByLastName,
    showFavorite,
    showNeutral,
    showBlocked,
    showAll
  }
)(SettingsBar);
