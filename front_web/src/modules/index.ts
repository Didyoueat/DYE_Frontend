import { combineReducers } from "redux";
import dispatchUser from "./user";
import dispatchPage from "./page";

const rootReducer = combineReducers({
	dispatchUser,
	dispatchPage,
});

export default rootReducer;
