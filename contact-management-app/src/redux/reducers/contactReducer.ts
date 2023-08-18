// src/redux/reducers/contactReducer.ts
import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
} from "../actions/contactActions";

// Define the Contact type
type Contact = {
  id: number;
  first_name: string;
  last_name: string;
  // Other properties of a contact
};

const initialState: Contact[] = [];

const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];

    case EDIT_CONTACT:
      return state.map((contact) =>
        contact.id === action.payload.id
          ? action.payload.updatedContact
          : contact
      );

    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload);

    default:
      return state;
  }
};

export default contactReducer;
