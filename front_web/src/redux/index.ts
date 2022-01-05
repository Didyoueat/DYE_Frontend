import { combineReducers } from "redux";
import shopReducer from "./shop";
import pageReducer from "./page";

const rootReducer = combineReducers({
	shopReducer,
	pageReducer,
});

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;
