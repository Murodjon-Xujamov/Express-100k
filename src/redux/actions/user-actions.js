import requests from "./../../helpers/requests";
import { toastr } from "react-redux-toastr";
// auth
export const authPassword = (username) => (dispatch) => {
  dispatch({ type: "auth_password_start", payload: username });

  requests
    .authPassword(username.replace(/\s/g, ""))
    .then(({ data }) => {
      dispatch({ type: "auth_password_success", payload: data });
      toastr.success(data.message);
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "auth_password_error", payload: message });
      toastr.error(message);
    });
};

export const authLogin = (params) => (dispatch) => {
  dispatch({ type: "auth_login_start", payload: params });

  requests
    .authLogin(params)
    .then(({ data }) => {
      dispatch({ type: "auth_login_success", payload: data });
      toastr.success(data.message);
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";

      dispatch({ type: "auth_login_error", payload: message });
      toastr.error(message);
    });
};

// profile informations

export const profileInfo = () => (dispatch) => {
  dispatch({ type: "profile_info_start" });

  requests
    .getMe()
    .then(({ data }) => {
      dispatch({ type: "profile_info_success", payload: data });
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) ||
        "Foydalanuvchi profilini yuklashda xatolik bor";
      toastr.error(message);
      dispatch({ type: "profile_info_error", payload: message });
    });
};

//accountSettings

export const updateProfileData = (formData) => (dispatch) => {
  dispatch({ type: "update_profile_data_start", payload: formData });
  requests
    .updateProfileData(formData)
    .then(({ data }) => {
      dispatch({ type: "update_profile_data_success", payload: data });
      toastr.success(data.message);
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) || "Sozlamalar o'zgartirilmadi";
      dispatch({ type: "update_profile_data_error", payload: message });
      toastr.error(message);
    });
};

//account image avatar update

export const updateProfileImage = (avatar) => (dispatch) => {
  dispatch({ type: "update_profile_avatar_start", payload: avatar });
  requests
    .updateProfileImage(avatar)
    .then(({ data }) => {
      dispatch({
        type: "update_profile_avatar_success",
        payload: { params: data.data },
      });
      toastr.success("Rasm yuklandi");
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Rasm yuklanmadi";
      dispatch({ type: "update_profile_avatar_error", payload: message });
      // toastr.error(message);
    });
};

// Money loss
export const moneyLoss = (amount) => (dispatch) => {
  dispatch({ type: "amount_user_start" });
  requests
    .moneyLoss({ amount })
    .then(({ data }) => {
      dispatch({ type: "amount_user_success", payload: data });
      window.open(data.data);
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) || "Sozlamalar o'zgartirilmadi";
      dispatch({ type: "amount_user_error", payload: message });
      toastr.error(message);
    });
};

export const myTransactions = () => (dispatch) => {
  dispatch({ type: "payment_history_start" });
  requests
    .transactions()
    .then(({ data }) => {
      dispatch({ type: "payment_history_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "payment_history_error", payload: response });
    });
};
