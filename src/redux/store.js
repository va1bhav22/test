// store/index.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import { thunk } from "redux-thunk";
import authSignInReducer from "./reducers/authSignInReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  signAuth: authSignInReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
