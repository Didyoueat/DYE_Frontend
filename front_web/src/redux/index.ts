import { combineReducers } from "redux";
import userReducer from "./user";
import pageReducer from "./page";

const rootReducer = combineReducers({
	userReducer,
	pageReducer,
});

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;
