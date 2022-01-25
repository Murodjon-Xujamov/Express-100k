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

  console.log("pack", packagesListData);

  useEffect(() => {
    dispatch(fetchAllPackagesList());
  }, []);
  return (
    <div>
      <PackagesListComp packagesListData={packagesListData} />
    </div>
  );
};

export default PackagesListPage;
