import requests from "../../helpers/requests";
import { toastr } from "react-redux-toastr";
/*
=============
FetchDelivery
=============
*/

export const fetchDelivery = (params) => (dispatch) => {
  dispatch({
    type: "fetch_deliverys_start",
    payload: params,
  });

  requests
    .fetchDelivery(params)
    .then(({ data }) => {
      dispatch({ type: "fetch_deliverys_success", payload: data });
    })
    .catch(() => {
      let message = "Pochtalarni yuklab bo'lmadi";
      dispatch({ type: "fetch_deliverys_error", payload: message });
      toastr.error(message);
    });
};

/*
=============
Delete Delivery
=============
*/

export const deleteDelivery = (packageId) => (dispatch) => {
  dispatch({
    type: "delete_delivery_start",
    payload: packageId,
  });

  requests
    .deleteDelivery(packageId)
    .then(({ data }) => {
      dispatch({ type: "delete_delivery_success", payload: { packageId } });
      toastr.success(data.message);
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) || "Pochtani o'chirolmadik !";
      dispatch({ type: "delete_delivery_error", payload: message });
      toastr.error(message);
    });
};

/*
=============
Edit Delivery
=============
*/

export const editPackage = (id, params) => (dispatch) => {
  dispatch({
    type: "edit_delivery_start",
    payload: params,
  });

  requests
    .editPackage(id, params)
    .then(({ data }) => {
      dispatch({
        type: "edit_delivery_success",
        payload: { id, params: data.data },
      });
      toastr.success(data.message);
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) || "Urinish mufaqiyatli";
      toastr.error(message);
      dispatch({
        type: "edit_delivery_error",
        payload: message,
      });
    });
};

/*
=============
Fetch Delivery one
=============
*/

export const fetchDeliveryOne = (id) => (dispatch) => {
  dispatch({
    type: "fetch_delivery_one_start",
    payload: id,
  });

  requests
    .fetchDeliveryOne(id)
    .then(({ data }) => {
      dispatch({ type: "fetch_delivery_one_success", payload: data });
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) || "Urinish mufaqiyatli";
      dispatch({ type: "fetch_delivery_one_error", payload: message });
      toastr.error(message);
    });
};

/*
=============
Create delivery list
=============
*/

export const createDeliverysList = (params) => (dispatch) => {
  dispatch({
    type: "create_deliverys_list_start",
    payload: params,
  });

  requests
    .createDeliverysList(params)
    .then((data) => {
      dispatch({
        type: "create_deliverys_list_success",
        payload: data,
      });
      toastr.success(data.message);
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) || "Ruyhatingizni junatilmadi";
      dispatch({ type: "create_deliverys_list_error", payload: message });
      toastr.error(message);
    });
};
/*
=============
FetchDelivery
=============
*/

export const fetchPackageList = (packageListId) => (dispatch) => {
  dispatch({
    type: "fetch_packages_start",
    payload: packageListId,
  });

  requests
    .fetchPackageList(packageListId)
    .then(({ data }) => {
      dispatch({ type: "fetch_packages_success", payload: data });
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) || "Pochtalarni yuklab ololmadik";

      dispatch({ type: "fetch_packages_error", payload: message });
    });
};
// Fetch all packages list
export const fetchAllPackagesList = (packageListId) => (dispatch) => {
  dispatch({
    type: "fetch_packages_start",
    payload: packageListId,
  });

  requests
    .fetchAllPackagesList()
    .then(({ data }) => {
      dispatch({ type: "fetch_packages_success", payload: data });
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) || "Pochtalarni yuklab ololmadik";

      dispatch({ type: "fetch_packages_error", payload: message });
    });
};
/*
=============
Fetch Store Drivers
=============
*/

export const fetchStoreDrivers = () => (dispatch) => {
  dispatch({
    type: "fetch_store_drivers_start",
  });

  requests
    .fetchStoreDrivers()
    .then(({ data }) => {
      dispatch({ type: "fetch_store_drivers_success", payload: data });
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) || "Pochtalarni yuklab ololmadik";

      dispatch({ type: "fetch_store_drivers_error", payload: message });
    });
};

/*
=============
Fetch Store Drivers statistics
=============
*/

export const fetchPackagesListStatistics = () => (dispatch) => {
  dispatch({
    type: "fetch_store_packages_statistics_start",
  });

  requests
    .fetchPackagesListStatistics()
    .then((data) => {
      dispatch({
        type: "fetch_store_packages_statistics_success",
        payload: data,
      });
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) || "Pochtalarni yuklab ololmadik";

      dispatch({
        type: "fetch_store_packages_statistics_error",
        payload: message,
      });
    });
};

/*
=============
Update delivery list
=============
*/

export const updatePackageList = (id, params) => (dispatch) => {
  dispatch({
    type: "update_delivery_list_start",
    payload: { id, params },
  });

  requests
    .updatePackageList(id, params)
    .then(({ data }) => {
      dispatch({ type: "update_delivery_list_success", payload: data });
      toastr.success(data.message);
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) ||
        "Malumotlarni saqlashga xatolik bor";
      dispatch({ type: "update_delivery_list_error", payload: message });
      toastr.error(message);
    });
};

export const updatePackage = (id, params) => (dispatch) => {
  dispatch({
    type: "update_delivery_list_start",
    payload: { id, params },
  });

  requests
    .updatePackage(id, params)
    .then(({ data }) => {
      dispatch({ type: "update_delivery_list_success", payload: data });
      toastr.success("Ma'lumotlar o'zgartirildi");
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) ||
        "Malumotlarni saqlashga xatolik bor";
      dispatch({ type: "update_delivery_list_error", payload: message });
      toastr.error(message);
    });
};

/*
=============
Updete delivery list
=============
*/

export const selectedDeliverySend = (ids) => (dispatch) => {
  dispatch({
    type: "selected_delivery_send_start",
    payload: { ids },
  });

  requests
    .selectedDeliverySend({ ids })
    .then(({ data }) => {
      dispatch({ type: "selected_delivery_send_success", payload: data });
    })
    .catch(({ response }) => {
      let message =
        (response && response.data.message) ||
        "Malumotlarni saqlashga xatolik bor";

      dispatch({ type: "selected_delivery_send_error", payload: message });
    });
};

/*
=============
Fetch delivery selected list
=============
*/
