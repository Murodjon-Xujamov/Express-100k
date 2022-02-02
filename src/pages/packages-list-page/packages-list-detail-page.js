import React, { useEffect } from "react";
import PackagesListDetailComp from "../../component/packages-list-comp/packages-list-detail-comp";
import { fetchPackageList } from "../../redux/actions/delivery-actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PackagesListDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const packageListData = useSelector(
    (state) => state.delivery.createPackegeList.store_packages
  );

  console.log("param", packageListData);
  useEffect(() => {
    dispatch(fetchPackageList(id));
  }, [id]);
  return (
    <div>
      <PackagesListDetailComp />
    </div>
  );
};

export default PackagesListDetailPage;
