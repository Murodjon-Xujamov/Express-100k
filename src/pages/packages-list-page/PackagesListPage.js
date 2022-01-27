import React, { useState, useEffect } from "react";
import PackagesListComp from "../../component/packages-list-comp/PackagesListComp";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPackagesList } from "../../redux/actions/deliveryActions";
import "../../assets/scss/_packages-list.scss";

const PackagesListPage = () => {
  const dispatch = useDispatch();
  const packagesListData = useSelector(
    (state) => state.delivery.createPackegeList
  );

  const loading = useSelector((state) => state.delivery.loading);

  useEffect(() => {
    dispatch(fetchAllPackagesList());
  }, []);
  return (
    <div>
      <PackagesListComp packagesListData={packagesListData} loading={loading} />
    </div>
  );
};

export default PackagesListPage;
