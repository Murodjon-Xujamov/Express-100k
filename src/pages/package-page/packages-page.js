import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/scss/packages.scss";
import { fetchDelivery } from "../../redux/actions/delivery-actions";
import PackagesComp from "../../component/package-comp/packages-comp";

const PackagesPage = () => {
  const dispatch = useDispatch();
  const [filterById, setFilterById] = useState("");

  useEffect(() => {
    dispatch(fetchDelivery(filterById));
  }, []);

  const deliveryList = useSelector((state) => state.delivery.list);
  const loading = useSelector((state) => state.delivery.loading);
  const locations = useSelector((state) => state.common.locations);

  const regions =
    locations &&
    locations.map((regions) => {
      return {
        label: regions.name,
        value: regions.id,
      };
    });
  return (
    <>
      <h1>Pochtalar</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-6 col-lg-3 col-md-6 col-sm-6 delivery__status'>
            <div className='delivery__box__white'></div>
            Yangi
          </div>
          <div className='col-6 col-lg-3 col-md-6 col-sm-6 delivery__status'>
            <div className='delivery__box__success'></div>
            Yetqazib berilganlar
          </div>
          <div className='col-6 col-lg-3 col-md-6 col-sm-6 delivery__status'>
            <div className='delivery__box__red'></div>
            Atkazlar
          </div>
          <div className='col-6 col-lg-3 col-md-6 col-sm-6 delivery__status'>
            <div className='delivery__box__yellow'></div>
            Yo'lda
          </div>
        </div>
      </div>
      <div className='card__delivery__table'>
        <PackagesComp
          deliveryList={deliveryList}
          loading={loading}
          locations={locations}
          regions={regions}
          search={(search) => {
            let filter = {
              ...filterById,
              search: search,
            };
          }}
        />
      </div>
    </>
  );
};

export default PackagesPage;
