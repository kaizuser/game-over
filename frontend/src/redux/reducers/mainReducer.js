import { combineReducers } from "redux";
import gamesReducer from './gamesReducer.js'

const mainReducer = combineReducers({
	gamesReducer
})

export default mainReducer;
