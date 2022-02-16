import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditPackageComp from "../../component/package-comp/edit-package-comp";
import { fetchDeliveryOne } from "../../redux/actions/delivery-actions";

const EditPackagePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.delivery.delivery);
  const { loading } = useSelector((state) => state.delivery);
  const locations = useSelector((state) => state.common.locations);

  const regions = locations.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });

  useEffect(() => {
    dispatch(fetchDeliveryOne(id));
    return () => dispatch({ type: "clear_delivery_success" });
  }, [id]);

  return (
    <>
      {dataList.id && (
        <EditPackageComp
          regions={regions}
          dataList={dataList}
          loading={loading}
          locations={locations}
        />
      )}
    </>
  );
};

export default EditPackagePage;
