import React from "react";
import "../../assets/scss/_delivery.scss";
import { IoMdClose } from "react-icons/io";
import { FcPrint } from "react-icons/fc";
import "react-dropdown/style.css";

const DeliveryModal = ({ show, onClose }) => {
  return (
    <>
      {show ? (
        <div className="delivery__modal">
          <div className="delivery__modal__header">
            <div className="delivery__modal__body__title">
              <IoMdClose
                size={30}
                className="delivery__modal__body__close_modal"
                onClick={() => {
                  onClose();
                }}
              />
              <FcPrint size={30} className="delivery__modal__body__print" />
            </div>
          </div>
          <div className="delivery__modal__body">
            <div className="delivery__modal__text__row">
              <span className="delivery__modal__text__left">ID</span>
              <span className="delivery__modal__text__right">123456</span>
            </div>
            <div className="delivery__modal__text__row">
              <span className="delivery__modal__text__left">Qayerdan</span>
              <span className="delivery__modal__text__right">
                Toshkent shahri
              </span>
            </div>
            <div className="delivery__modal__text__row">
              <span className="delivery__modal__text__left">Qayerga</span>
              <span className="delivery__modal__text__right">
                Qashqadayo, Qarshi, mahalla
              </span>
            </div>
            <div className="delivery__modal__text__row">
              <span className="delivery__modal__text__left">Mahsulot</span>
              <span className="delivery__modal__text__right">Sedana</span>
            </div>
            <div className="delivery__modal__text__row">
              <span className="delivery__modal__text__left">Xaridor</span>
              <span className="delivery__modal__text__right">Mijoz</span>
            </div>
            <div className="delivery__modal__text__row">
              <span className="delivery__modal__text__left">
                Xaridor raqami
              </span>
              <span className="delivery__modal__text__right">
                +998916411113
              </span>
            </div>
            <div className="delivery__modal__text__row">
              <span className="delivery__modal__text__left">
                Umumiy summasi
              </span>
              <span className="delivery__modal__text__right">450,000 sum</span>
            </div>
            <div className="delivery__modal__text__row">
              <span className="delivery__modal__text__left">
                Dostavka summasi
              </span>
              <span className="delivery__modal__text__right">40,000 sum</span>
            </div>
            <div className="delivery__modal__text__row">
              <span className="delivery__modal__text__left">Vaqt</span>
              <span className="delivery__modal__text__right">
                13:16 12.16.2012
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DeliveryModal;
