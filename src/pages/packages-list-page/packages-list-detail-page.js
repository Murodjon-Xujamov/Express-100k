import React, { useState, useEffect } from "react";
import PackagesListDetailComp from "../../component/packages-list-comp/packages-list-detail-comp";
import { useParams } from "react-router-dom";
import requests from "../../helpers/requests";

const PackagesListDetailPage = () => {
  const [packageDetailList, setPackageDetailList] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    requests
      .fetchPackageList(id)
      .then(({ data }) => {
        setPackageDetailList(data);
      })
      .catch(({ response }) => {
        console.log("err", response);
      });
  }, [id]);

  return (
    <div className='root'>
      <PackagesListDetailComp packageListDetailData={packageDetailList.data} />
    </div>
  );
};

export default PackagesListDetailPage;
