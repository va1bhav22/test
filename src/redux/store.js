// store/index.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import { thunk } from "redux-thunk";
import authSignInReducer from "./reducers/authSignInReducer";
import postReducer from "./reducers/postReducers";
const rootReducer = combineReducers({
  auth: authReducer,
  signAuth: authSignInReducer,
  post: postReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
