export const loadDefaultContacts = () => ({type: "load_default_contacts"});

export const getLocalStorageContacts = () => ({type: "get_local_storage_contacts"});

export const deleteContact = id => ({ type: "delete_contact", id });

export const addContact = contact => ({ type: "add_contact", contact });

export const updateContact = contact => ({ type: "update_contact", contact });
