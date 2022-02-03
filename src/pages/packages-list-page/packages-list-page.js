import React, { useEffect } from "react";
import PackagesListComp from "../../component/packages-list-comp/packages-list-comp";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPackagesList } from "../../redux/actions/delivery-actions";
import "../../assets/scss/packages-list.scss";

const PackagesListPage = () => {
  const dispatch = useDispatch();
  const packagesListData = useSelector((state) => state.delivery.list);

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
