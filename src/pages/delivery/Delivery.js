import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/scss/_delivery.scss";
import DeliveryListComp from "../../component/delivery/DeliveryListComp";
import { fetchDelivery } from "../../redux/actions/deliveryActions";

const Delivery = () => {
  const [showModalDelivery, setShowModalDelivery] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDelivery());
  }, []);

  const deliveryList = useSelector((state) => state.delivery.list);
  console.log(deliveryList);

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
        <DeliveryListComp />
      </div>
    </>
  );
};

export default Delivery;
