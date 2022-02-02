import axios from "axios";

const url = `${process.env.REACT_APP_API_DOMAIN}api`;
// const portalUrl = `${process.env.REACT_APP_API_DOMAIN}portal-api`;
const token = window.localStorage.getItem("@token");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const packageData = (data) => {
  const form = new FormData();
  for (const key in data) {
    if (Array.isArray(data[key])) {
      for (const childKey in data[key]) {
        form.append(`${key}[${childKey}]`, data[key][childKey]);
      }
    } else {
      form.append(key, data[key]);
    }
  }
  return form;
};

const requests = {
  // user profile
  authPassword: (username) => axios.post(`${url}/auth/password`, { username }),
  authLogin: ({ username, password }) =>
    axios.post(`${url}/auth/login`, { username, password }),
  getMe: () => axios.get(`${url}/user/getMe`, config),
  authRefreshToken: (params) => axios.post(`${url}/auth/refresh-token`, params),
  authInvalidateToken: (params) =>
    axios.post(`${url}/auth/invalidate-token`, params),
  updateProfileData: (params) =>
    axios.post(`${url}/user/update`, packageData(params), config),
  updateProfileImage: (avatar) =>
    axios.post(`${url}/user/set-avatar`, packageData({ avatar }), config),

  //delivery
  createDelivery: (params) =>
    axios.post(`${url}/user/packages`, params, config),
  editPackage: (id, params) =>
    axios.put(`${url}/user/package/${id}`, params, config),
  deleteDelivery: (deleteID) =>
    axios.delete(`${url}/user/packages/${deleteID}`, config),
  fetchDelivery: (params) =>
    axios.get(`${url}/user/packages/`, { params, ...config }),
  fetchDeliveryOne: (id) => axios.get(`${url}/user/package/${id}`, config),
  createDeliverysList: (params) =>
    axios.post(`${url}/store/package-list`, { checked: params }, config),
  fetchPackageList: (packageListId) =>
    axios.get(`${url}/user/package-list/${packageListId}`, config),
  fetchAllPackagesList: () => axios.get(`${url}/user/package-list`, config),
  fetchPackagesListStatistics: () =>
    axios.get(`${url}/store/package-list`, config),
  fetchStoreDrivers: () => axios.get(`${url}/store/drivers`, config),
  updatePackage: (id, params) =>
    axios.put(`${url}/user/package/${id}`, params, config),
  updatePackageList: (id, params) =>
    axios.patch(`${url}/store/package-list/${id}`, params, config),
  fetchActivePackageListSelected: (params) =>
    axios.get(`${url}/user/packages/selected`, { params, ...config }),
  selectedDeliverySend: (ids) =>
    axios.post(`${url}/user/packages/activate`, ids, config),

  // locations
  fetchLocations: () => axios.get(`${url}/locations`),

  // payments
  moneyLoss: (amount) =>
    axios.post(`${url}/user/payment/payme`, amount, config),
  transactions: () => axios.get(`${url}/user/transactions`, config),
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("err", error);

    if (error.response.status === 555) {
      window.localStorage.removeItem("@token");
      window.location.reload();
    } else if (error.response.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    const token = window.localStorage.getItem("@token");
    return axios
      .post(`${url}/auth/refresh-token?token=${token}`)
      .then(({ data }) => {
        window.localStorage.setItem("@token", data.token);

        const config = error.config;
        config.headers = { Authorization: `Bearer ${data.token}` };

        return new Promise((resolve, reject) => {
          axios
            .request(config)
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              reject(error);
            });
        });
      })
      .catch((err) => {
        return new Promise((resolve, reject) => {
          reject(err);
        });
      });
  }
);

export default requests;
