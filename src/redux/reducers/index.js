import { combineReducers } from "redux";
import userReducer from "./userReducer";
import deliveryReducer from "./deliveryReducers";

const reducer = combineReducers({
  user: userReducer,
  delivery: deliveryReducer,
});

export default reducer;
