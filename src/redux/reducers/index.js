import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import deliveryReducer from "./delivery-reducers";
import commonReducers from "./common-reducers";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

const reducer = combineReducers({
  toastr: toastrReducer,
  common: commonReducers,
  user: userReducer,
  delivery: deliveryReducer,
  form: formReducer,
});

export default reducer;
