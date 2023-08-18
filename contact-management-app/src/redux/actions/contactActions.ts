// src/redux/actions/contactActions.ts

// Define the Contact type
type Contact = {
    id: number;
    first_name: string;
    last_name: string;
    // Other properties of a contact
  };
  
  // Define action types
  export const ADD_CONTACT = 'ADD_CONTACT';
  export const EDIT_CONTACT = 'EDIT_CONTACT';
  export const DELETE_CONTACT = 'DELETE_CONTACT';
  
  // Define action creators
  export const addContact = (contact: Contact) => ({
    type: ADD_CONTACT,
    payload: contact,
  });
  
  export const editContact = (id: number, updatedContact: Contact) => ({
    type: EDIT_CONTACT,
    payload: { id, updatedContact },
  });
  
  export const deleteContact = (id: number) => ({
    type: DELETE_CONTACT,
    payload: id,
  });
  