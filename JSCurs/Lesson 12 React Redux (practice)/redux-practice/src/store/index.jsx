import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";
import { postsReducer } from "./reducers/postsReducer";

const rootReducer = combineReducers({
 users: userReducer,
 posts: postsReducer
});

export const store = createStore(rootReducer);