import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/scss/delivery.scss";
import { fetchDelivery } from "../../redux/actions/delivery-actions";
import { fetchLocations } from "../../redux/actions/common-actions";
import PackagesComp from "../../component/package-comp/packages-comp";

const PackagesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDelivery());
    dispatch(fetchLocations());
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
      <div className='delivery__top'>
        <h1>Pochtalar</h1>
        <div className='delivery__status'>
          <div className='delivery__box__white'></div>
          Yangi
        </div>
        <div className='delivery__status'>
          <div className='delivery__box__success'></div>
          Yetqazib berilganlar
        </div>
        <div className='delivery__status'>
          <div className='delivery__box__red'></div>
          Atkazlar
        </div>
        <div className='delivery__status delivery__status__right'>
          <div className='delivery__box__yellow'></div>
          Yo'lda
        </div>
      </div>
      <div className='card__delivery__table'>
        <PackagesComp
          deliveryList={deliveryList}
          loading={loading}
          locations={locations}
          regions={regions}
        />
      </div>
    </>
  );
};

export default PackagesPage;