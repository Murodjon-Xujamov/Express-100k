const INITIAL_STATE = {
  locations: [],
  loading: false,
  message: "",
  category: [],
};

export const ACTIONS = {
  FETCH_LOCATIONS_ERROR: "FETCH_LOCATIONS_ERROR",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    // auth
    case "fetch_locations_start":
      return { ...state, loading: true };
    case ACTIONS.FETCH_LOCATIONS_ERROR:
      return { ...state, message: payload, loading: false };
    case "fetch_locations_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        locations: payload.data,
      };

    // Category
    case "fetch_categorys_start":
      return { ...state, loading: true };
    case "fetch_categorys_error":
      return { ...state, message: payload, loading: false };
    case "fetch_categorys_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        category: payload.data,
      };

    default:
      return state;
  }
};
