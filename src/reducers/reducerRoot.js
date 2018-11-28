import { combineReducers } from "redux";
import contacts from "./reducerContacts";
import settings from "./reducerSettings";

export default combineReducers({ contacts, settings });
