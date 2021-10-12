import { combineReducers } from "redux";
import { pizzaReducer } from "./pizzaReducer";

const reducers = combineReducers({
  allPizzas: pizzaReducer,
});

export default reducers;
