import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import deliveryReducer from "./delivery-reducers";
import commonReducers from "./common-reducers";
import { reducer as formReducer } from "redux-form";
const reducer = combineReducers({
  common: commonReducers,
  user: userReducer,
  delivery: deliveryReducer,
  form: formReducer,
});

export default reducer;
