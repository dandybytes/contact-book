import {combineReducers} from "redux";
import contacts from "./reducerContacts";
import settings from "./reducerSettings";
import pagination from "./reducerPagination";

export default combineReducers({contacts, settings, pagination});
