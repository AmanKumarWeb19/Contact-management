
// src/redux/store/store.ts
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // If you're using thunk middleware
import contactReducer from '../reducers/contactReducer';

// Combine reducers
const rootReducer = combineReducers({
  contacts: contactReducer,
  // Add other reducers here if needed
});

// Apply middleware
const middleware = [thunk]; // Add other middlewares here if needed

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
