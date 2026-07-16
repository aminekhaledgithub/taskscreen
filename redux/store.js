import { combineReducers, createStore } from "redux"
// import { taskList } from "./reducers/taskList";
import { recetteList } from "./reducers/recetteList";

const rootReducers = combineReducers({
  // taskList,
  recetteList
})

export const store = createStore(rootReducers);
