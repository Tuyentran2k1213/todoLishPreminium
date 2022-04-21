import { combineReducers } from "redux";
import taskReducer from "./TaskReducer";

const rootTaskReducer = combineReducers({
    taskReducer,
})

export default rootTaskReducer;