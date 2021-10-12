import { createStore } from "redux";
import reducers from "./reducers/index.js";

const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>;

export default store;
