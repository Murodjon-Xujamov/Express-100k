const INITIAL_STATE = {
  data: [],
  loginStep: 0,
  loading: false,
  loadingUpdateProfile: false,
  loadingUpdateImage: false,
  success: false,
  token: null,
  message: null,
  sidebarShow: "responsive",
  transactions: [],
  handLink: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
    // auth
    case "auth_password_start":
      return { ...state, loading: true, message: "" };
    case "auth_password_error":
      return { ...state, message: payload, loading: false };
    case "auth_password_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        loginStep: 1,
      };

    case "auth_login_start":
      return { ...state, loading: true, message: "", success: false };
    case "auth_login_error":
      return { ...state, message: payload, loading: false };
    case "auth_login_success":
      window.localStorage.setItem("@token", payload.data);
      return {
        ...state,
        loading: false,
        token: payload.data,
        message: payload.message,
      };
    case "back_to_password":
      return {
        ...state,
        loginStep: 0,
      };

    // profile
    case "logout":
      return { ...INITIAL_STATE };

    //sidebar toggle reducer
    case "sidebar_toggle":
      return { ...state, ...rest };

    //profile info
    case "profile_info_start":
      return { ...state, loading: true };
    case "profile_info_error":
      return { ...state, message: payload, loading: false };
    case "profile_info_success":
      return { ...state, loading: false, data: payload.data };

    //update profile data
    case "update_profile_data_start":
      return {
        ...state,
        loadingUpdateProfile: true,
        success: false,
        loading: true,
      };
    case "update_profile_data_error":
      return {
        ...state,
        loading: false,
        message: payload,
        loadingUpdateProfile: false,
      };
    case "update_profile_data_success":
      return {
        ...state,
        loading: false,
        loadingUpdateProfile: false,
        data: payload.data,
        success: true,
        messageSuccess: "Malumotlar saqlandi",
      };
    case "clear__success__message":
      return {
        ...state,
        messageSuccess: "",
      };

    //update profile data
    case "update_profile_avatar_start":
      return {
        ...state,
        loadingUpdateImage: true,
      };
    case "update_profile_avatar_error":
      return { ...state, message: payload, loadingUpdateImage: false };
    case "update_profile_avatar_success":
      state.data = payload.params;
      return {
        ...state,
        loadingUpdateImage: false,
        data: [...state.data],
      };

    // money loss
    case "amount_user_start":
      return { ...state, loading: true, message: "" };
    case "amount_user_error":
      return { ...state, message: payload, loading: false };
    case "amount_user_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
      };

    // payment history
    case "payment_history_start":
      return { ...state, loading: true, message: "" };
    case "payment_history_error":
      return { ...state, message: payload, loading: false };
    case "payment_history_success":
      return {
        ...state,
        transactions: payload.data,
        loading: false,
        handLink: payload.meta.current_page < payload.meta.last_page,
      };

    /* other */
    default:
      return state;
  }
};
