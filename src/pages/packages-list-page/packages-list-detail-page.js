import React, { useEffect } from "react";
import PackagesListDetailComp from "../../component/packages-list-comp/packages-list-detail-comp";
import { fetchPackageList } from "../../redux/actions/delivery-actions";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import "../../assets/scss/packages-list.scss";

const PackagesListDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const packageListDetailData = useSelector(
    (state) => state.delivery.list.store_packages
  );

  console.log("param", packageListDetailData);
  useEffect(() => {
    dispatch(fetchPackageList(id));
  }, [id]);
  return (
    <div className='root'>
      <PackagesListDetailComp packageListDetailData={packageListDetailData} />
    </div>
  );
};

export default PackagesListDetailPage;
