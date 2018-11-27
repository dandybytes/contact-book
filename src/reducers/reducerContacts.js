import { contacts } from "../contacts/sample-contacts";

const reducerContacts = (state = { contacts: [] }, action) => {
  switch (action.type) {
    case "load_default_contacts":
      return {...state, contacts};
    case "delete_contact":
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.id)
      };
    case "add_contact":
      return {
        ...state, contacts: [...state.contacts, {...action.contact, id: +new Date()}]
      };
    default:
      return state;
  }
};

export default reducerContacts;
