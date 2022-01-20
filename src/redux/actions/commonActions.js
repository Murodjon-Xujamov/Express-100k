import { ACTIONS } from "../reducers/commonReducers";
import requests from "../../helpers/requests";

export const fetchLocations = () => (dispatch) => {
  dispatch({ type: "fetch_locations_start" });

  requests
    .fetchLocations()
    .then((data) => {
      dispatch({ type: "fetch_locations_success", payload: data });
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) ||
        "SHaharlar royhatini yuklab bolmadi";

      dispatch({ type: ACTIONS.FETCH_LOCATIONS_ERROR, payload: message });
    });
};
