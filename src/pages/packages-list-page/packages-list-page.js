import React, { useEffect } from "react";
import PackagesListComp from "../../component/packages-list-comp/packages-list-comp";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPackagesList } from "../../redux/actions/delivery-actions";

const PackagesListPage = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.delivery.loading);

  useEffect(() => {
    dispatch(fetchAllPackagesList());
  }, []);
  const packagesListData = useSelector((state) => state.delivery.list);
  return (
    <div>
      <PackagesListComp packagesListData={packagesListData} loading={loading} />
    </div>
  );
};

export default PackagesListPage;
