const INITIAL_STATE = {
  list: [],
  loading: false,
  message: "",
  messageSuccess: null,
  success: false,
  hasMore: true,
  delivery: {},
  createPackegeList: [],
  deliverys: [],
  deliveryStatistics: [],
};

export const ACTIONS = {
  FETCH_DELIVERY_ERROR: "FETCH_LOCATIONS_ERROR",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    // auth
    case "fetch_deliverys_start":
      return { ...state, loading: true, hasMore: true };
    case "fetch_deliverys_error":
      return { ...state, message: payload, loading: false };
    case "fetch_deliverys_success":
      if (!payload.data.length || !payload.meta) {
        return {
          ...state,
          loading: false,
          list: [],
          message: "So'rovlar topilmadi",
        };
      }

      if (payload.meta.current_page > 1) {
        return {
          ...state,
          loading: false,
          list: [...state.list, ...payload.data],
          hasMore: payload.meta.current_page < payload.meta.last_page,
        };
      }

      return {
        ...state,
        loading: false,
        list: payload.data,
        hasMore: payload.meta.current_page < payload.meta.last_page,
      };

    // Create delivery
    case "create_delivery_start":
      return { ...state, loading: true };
    case "create_delivery_error":
      return { ...state, message: payload, loading: false };
    case "create_delivery_success":
      const newList1 = [...state.list, payload.data && payload.data.data];
      return {
        ...state,
        loading: false,
        message: "Ma'lumot saqlandi",
        data: payload.data,
        list: newList1,
      };

    // Create deliverys list
    case "create_deliverys_list_start":
      return { ...state, loading: true };
    case "create_deliverys_list_error":
      return { ...state, message: payload, loading: false };
    case "create_deliverys_list_success":
      return {
        ...state,
        loading: false,
        message: "Ma'lumot saqlandi",
        data: payload.data,
      };

    // Delete delivery
    case "delete_delivery_start":
      return { ...state, loading: true };
    case "delete_delivery_error":
      return { ...state, message: payload, loading: false };
    case "delete_delivery_success":
      const newList =
        state.list.filter((item) => item.id !== payload.packageId) || [];
      return {
        ...state,
        message: payload.message,
        loading: false,
        list: newList,
      };

    // Edit delivery
    case "edit_delivery_start":
      return { ...state, loading: true, success: false };
    case "edit_delivery_error":
      return { ...state, message: payload.message, loading: false };
    case "edit_delivery_success":
      let oldItemIndex;
      state.list.forEach((item, index) => {
        if (item.id === payload.id) {
          oldItemIndex = index;
        }
      });
      state.list[oldItemIndex] = payload.params;
      return {
        ...state,
        message: "Pochta saqlandi",
        loading: false,
        success: true,
        list: [...state.list],
      };

    // Fetch delivery one
    case "fetch_delivery_one_start":
      return { ...state, loading: true, hasMore: true };
    case "fetch_delivery_one_error":
      return { ...state, message: payload, loading: false };
    case "fetch_delivery_one_success":
      return {
        ...state,
        loading: false,
        delivery: payload.data,
      };
    case "clear_delivery_success":
      return {
        ...state,
        delivery: {},
      };

    // Fetch packeges list
    case "fetch_packages_start":
      return { ...state, loading: true, hasMore: true };
    case "fetch_packages_error":
      return { ...state, message: payload, loading: false };
    case "fetch_packages_success":
      return {
        ...state,
        loading: false,
        message: payload.message,
        list: payload.data,
      };

    // Fetch store dreverys
    case "fetch_store_drivers_start":
      return {
        ...state,
        loading: true,
        message: "",
        hasMore: true,
        success: false,
      };
    case "fetch_store_drivers_error":
      return { ...state, message: payload, loading: false };
    case "fetch_store_drivers_success":
      return {
        ...state,
        loading: false,
        success: true,
        deliverys: payload.data,
      };

    // Fetch store delivery statistics
    case "fetch_store_packages_statistics_start":
      return { ...state, loading: true, hasMore: true };
    case "fetch_store_packages_statistics_error":
      return { ...state, message: payload, loading: false };
    case "fetch_store_packages_statistics_success":
      return {
        ...state,
        loading: false,
        deliveryStatistics: payload.data.data,
      };

    // Uptede delivery list
    case "update_delivery_list_start":
      return {
        ...state,
        loading: true,
        hasMore: true,
        success: false,
      };
    case "update_delivery_list_error":
      return { ...state, message: payload.message, loading: false };
    case "update_delivery_list_success":
      return {
        ...state,
        loading: false,
        message: "Ma'lumotlar saqlandi",
        success: true,
      };
    case "clear_delivery_list_message_success":
      return {
        ...state,
        messageSuccess: "",
      };

    // Selected acteve delevery
    case "selected_delivery_send_start":
      return {
        ...state,
        loading: true,

        hasMore: true,
        success: false,
      };
    case "selected_delivery_send_error":
      return { ...state, message: payload, loading: false };
    case "selected_delivery_send_success":
      return {
        ...state,
        loading: false,
        messageSuccess: "Actevilashtirildi",
        success: true,
      };
    case "clear_delivery_list_selected_message_success":
      return {
        ...state,
        messageSuccess: "",
        success: false,
      };

    default:
      return state;
  }
};
