import React from "react";
import "../../assets/scss/_delivery.scss";
import { IoMdClose } from "react-icons/io";
import { FcPrint } from "react-icons/fc";
import "react-dropdown/style.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteDelivery } from "../../redux/actions/deliveryActions";
import { Link, useParams } from "react-router-dom";

const DeliveryModal = ({ show, onClose, deliveryList, removeDelivery }) => {
  const {
    // id,
    from_full_address,
    to_full_address,
    matter,
    recipient_name,
    recipient_phone,
    cash_amount,
    delivery_fee_amount,
    created_at,
  } = deliveryList;
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("rr", id);

  const deleteDeliveryData = () => {
    if (window.confirm("Haqiqattan ham o'chirmoqchimisiz") == true) {
      return removeDelivery(id);
    } else {
      return "";
    }
  };

  return (
    <>
      {show ? (
        <div className='delivery__modal'>
          <div className='delivery__modal__header'>
            <div className='delivery__modal__body__title'>
              <IoMdClose
                size={30}
                className='delivery__modal__body__close_modal'
                onClick={() => {
                  onClose();
                }}
              />
              <FcPrint size={30} className='delivery__modal__body__print' />
            </div>
          </div>

          <div className='delivery__modal__body'>
            <div className='delivery__modal__text__row'>
              <span className='delivery__modal__text__left'>ID</span>
              <span className='delivery__modal__text__right'>{id}</span>
            </div>
            <div className='delivery__modal__text__row'>
              <span className='delivery__modal__text__left'>Qayerdan</span>
              <span className='delivery__modal__text__right'>
                {from_full_address}
              </span>
            </div>
            <div className='delivery__modal__text__row'>
              <span className='delivery__modal__text__left'>Qayerga</span>
              <span className='delivery__modal__text__right'>
                {to_full_address}
              </span>
            </div>
            <div className='delivery__modal__text__row'>
              <span className='delivery__modal__text__left'>Mahsulot</span>
              <span className='delivery__modal__text__right'>{matter}</span>
            </div>
            <div className='delivery__modal__text__row'>
              <span className='delivery__modal__text__left'>Xaridor</span>
              <span className='delivery__modal__text__right'>
                {recipient_name}
              </span>
            </div>
            <div className='delivery__modal__text__row'>
              <span className='delivery__modal__text__left'>
                Xaridor raqami
              </span>
              <span className='delivery__modal__text__right'>
                {recipient_phone}
              </span>
            </div>
            <div className='delivery__modal__text__row'>
              <span className='delivery__modal__text__left'>
                Umumiy summasi
              </span>
              <span className='delivery__modal__text__right'>
                {cash_amount}
              </span>
            </div>
            <div className='delivery__modal__text__row'>
              <span className='delivery__modal__text__left'>
                Dostavka summasi
              </span>
              <span className='delivery__modal__text__right'>
                {delivery_fee_amount}
              </span>
            </div>
            <div className='delivery__modal__text__row'>
              <span className='delivery__modal__text__left'>Vaqt</span>
              <span className='delivery__modal__text__right'>{created_at}</span>
            </div>
            <div className='delivery__modal__text__row'>
              <div></div>
              <div>
                <Link to='/package/edit-package/:id' state={{ deliveryList }}>
                  <button className='bg-warning'>Edit</button>
                </Link>
                <button
                  className='bg-danger'
                  onClick={() => deleteDeliveryData()}>
                  Delete
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DeliveryModal;
