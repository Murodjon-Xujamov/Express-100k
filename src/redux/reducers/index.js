import { combineReducers } from "redux";
import userReducer from "./userReducer";
import deliveryReducer from "./deliveryReducers";
import commonReducers from "./commonReducers";
import { reducer as formReducer } from "redux-form";
const reducer = combineReducers({
  common: commonReducers,
  user: userReducer,
  delivery: deliveryReducer,
  form: formReducer,
});

export default reducer;
