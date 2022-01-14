import requests from "./../../helpers/requests";

// auth
export const authPassword = (username) => (dispatch) => {
  dispatch({ type: "auth_password_start", payload: username });

  requests
    .authPassword(username.replace(/\s/g, ""))
    .then(({ data }) => {
      dispatch({ type: "auth_password_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";

      dispatch({ type: "auth_password_error", payload: message });
    });
};

export const authLogin = (params) => (dispatch) => {
  dispatch({ type: "auth_login_start", payload: params });

  requests
    .authLogin(params)
    .then(({ data }) => {
      dispatch({ type: "auth_login_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";

      dispatch({ type: "auth_login_error", payload: message });
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

      dispatch({ type: "profile_info_error", payload: message });
    });
};

//accountSettings

export const updateProfileData = (params) => (dispatch) => {
  dispatch({ type: "update_profile_data_start", payload: params });
  requests
    .updateProfileData(params)
    .then(({ data }) => {
      dispatch({ type: "update_profile_data_success", payload: data });
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) || "Sozlamalar o'zgartirilmadi";
      dispatch({ type: "update_profile_data_error", payload: message });
    });
};

//account image avatar uptede

export const updateProfileImage = (avatar) => (dispatch) => {
  dispatch({ type: "update_profile_avatar_start", payload: avatar });
  requests
    .updateProfileImage(avatar)
    .then(({ data }) => {
      dispatch({
        type: "update_profile_avatar_success",
        payload: { params: data.data },
      });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "";
      dispatch({ type: "update_profile_avatar_error", payload: message });
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

// logout
export const logout = (params) => (dispatch) => {
  dispatch({ type: "logout", payload: params });
  window.localStorage.removeItem("@token");
  window.location.reload();
};
