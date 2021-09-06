import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import projectsReducer from "./projects";
import authReducer from "./auth";

const reducers = combineReducers({
	arrOfProjects: projectsReducer,
	userInfo: authReducer,
});

const store = () => {
	return createStore(reducers, applyMiddleware(thunk));
};

export default store();
