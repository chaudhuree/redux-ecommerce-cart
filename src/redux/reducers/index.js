import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
  // reducers
  allProducts: productReducer,
});

export default reducers;
