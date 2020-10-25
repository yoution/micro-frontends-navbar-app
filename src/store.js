/**
 * Configure Redux Store
 */
import { createStore } from "redux";
import rootReducer from "./reducers";
import { authenticate } from "./services/auth";

const store = createStore(rootReducer);

authenticate(store);

export default store;
