import {combineReducers, createStore} from "redux";
import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';

export default createStore(combineReducers({mathReducer, userReducer}));
