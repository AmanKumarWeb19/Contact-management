// src/redux/store/store.ts
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import contactReducer from "../reducers/contactReducer";
import { Contact } from "../../types/types";

// Define the RootState type
type RootState = {
  contacts: Contact[]; // Assuming Contact is a type you've defined
  // Other properties of your state
};

// Combine reducers
const rootReducer = combineReducers({
  contacts: contactReducer,
  // Add other reducers here if needed
});

// Apply middleware
const middleware = [thunk];

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
