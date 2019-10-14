import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import hobbiesReducers from "./hobbies";

const store = createStore(hobbiesReducers, applyMiddleware(thunkMiddleware));

export default store;
