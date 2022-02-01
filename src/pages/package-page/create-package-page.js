import React, { useEffect } from "react";
import requests from "../../helpers/requests";
import { useDispatch, useSelector } from "react-redux";
import CreatePackageComp from "../../component/package-comp/create-package-comp";
import { fetchLocations } from "../../redux/actions/common-actions";
import { profileInfo } from "../../redux/actions/user-actions";

const CreatePackagePage = () => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.common.locations);
  const userInfo = useSelector((state) => state.user.data);
  const loading = useSelector((state) => state.delivery.loading);

  useEffect(() => {
    dispatch(fetchLocations());
    dispatch(profileInfo());
  }, []);

  const createDelivery = (params) => {
    dispatch({
      type: "create_delivery_start",
      payload: params,
    });

    requests
      .createDelivery(params)
      .then((data) => {
        dispatch({ type: "create_delivery_success", payload: data });
      })
      .catch(({ response }) => {
        let message =
          (response && response.data.message) ||
          "Junatolmadik hammasini tuldiring";

        dispatch({ type: "create_delivery_error", payload: message });
      });
  };

  // Functions
  const regions = locations.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });
  return (
    <div>
      <CreatePackageComp
        regions={regions}
        userInfo={userInfo}
        locations={locations}
        loading={loading}
        onClickCreateDelivery={(deliveryInfo) => createDelivery(deliveryInfo)}
      />
    </div>
  );
};

export default CreatePackagePage;