import { combineReducers } from "redux";
import userReducer from "./userReducer";
import deliveryReducer from "./deliveryReducers";
import commonReducers from "./commonReducers";

const reducer = combineReducers({
  common: commonReducers,
  user: userReducer,
  delivery: deliveryReducer,
});

export default reducer;
