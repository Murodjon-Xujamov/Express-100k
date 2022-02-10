import React from "react";
import "../../assets/scss/packages.scss";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FcPrint } from "react-icons/fc";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import "react-dropdown/style.css";

const PackageModalComp = ({ show, onClose, deliveryList, removeDelivery }) => {
  const {
    id,
    from_full_address,
    to_full_address,
    matter,
    recipient_name,
    recipient_phone,
    cash_amount,
    delivery_fee_amount,
    created_at,
  } = deliveryList;

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
        <div className='container delivery__modal overflow-auto'>
          <div className='row'>
            <div className='col-12 col-sm-12'>
              <div className='row mt-5 p-5'>
                <div className='col-12 col-lg-12 col-md-12 col-sm-12 text-end'>
                  <IoMdClose
                    size={30}
                    className='delivery__modal__body__close_modal '
                    onClick={() => {
                      onClose();
                    }}
                  />
                </div>
              </div>

              <div className='container fw-bold'>
                <div className='row'>
                  <div className='col-4 col-lg-4 col-md-4 col-sm-3'>
                    <span className='text-secondary'>ID</span>
                  </div>
                  <div className='col-8 col-lg-8 col-md-8 col-sm-9 text-end '>
                    <span className='text-end'>{id}</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-4 col-lg-4 col-md-4 col-sm-3'>
                    <span className='text-secondary'>Qayerdan</span>
                  </div>
                  <div className='col-8 col-lg-8 col-md-8 col-sm-9 text-end'>
                    <span>{from_full_address}</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-4 col-lg-4 col-md-4 col-sm-3 '>
                    <span className='text-secondary'>Qayerga</span>
                  </div>
                  <div className='col-8 col-lg-8 col-md-8 col-sm-9 text-end'>
                    <span>{to_full_address}</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-4 col-lg-4 col-md-4 col-sm-3'>
                    <span className='text-secondary'>Mahsulot</span>
                  </div>
                  <div className='col-8 col-lg-8 col-md-8 col-sm-9 text-end'>
                    <span>{matter}</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-4 col-lg-4 col-md-4 col-sm-3'>
                    <span className='text-secondary'>Xaridor</span>
                  </div>
                  <div className='col-8 col-lg-8 col-md-8 col-sm-9 text-end'>
                    <span>{recipient_name}</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-4 col-lg-4 col-md-4 col-sm-3'>
                    <span className='text-secondary'>Xaridor raqami</span>
                  </div>
                  <div className='col-8 col-lg-8 col-md-8 col-sm-9 text-end'>
                    <span>{recipient_phone}</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-4 col-lg-4 col-md-4 col-sm-3'>
                    <span className='text-secondary'>Umumiy summasi</span>
                  </div>
                  <div className='col-8 col-lg-8 col-md-8 col-sm-9 text-end'>
                    <span>{cash_amount}</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-4 col-lg-4 col-md-4 col-sm-3'>
                    <span className='text-secondary'>Dostavka summasi</span>
                  </div>
                  <div className='col-8 col-lg-8 col-md-8 col-sm-9 text-end'>
                    <span>{delivery_fee_amount}</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-4 col-lg-4 col-md-4 col-sm-3'>
                    <span className='text-secondary'>Vaqt</span>
                  </div>
                  <div className='col-8 col-lg-8 col-md-8 col-sm-9 text-end'>
                    <span className='delivery__modal__text__right'>
                      {created_at}
                    </span>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 col-lg-4 col-md-6 col-sm-12 mt-2'>
                    <Link to={`/package/edit-package/${id}`}>
                      <button className='btn bg-warning px-5 w-100'>
                        <AiOutlineEdit size={20} /> Edit
                      </button>
                    </Link>
                  </div>
                  <div className='col-12 col-lg-4 col-md-6 col-sm-12 mt-2'>
                    <button className='btn btn-info bg-info px-5 text-white w-100'>
                      <FcPrint size={20} /> Print
                    </button>
                  </div>
                  <div className='col-12 col-lg-4 col-md-6 col-sm-12 mt-2'>
                    <button
                      className='btn bg-danger text-white px-5 w-100 d-flex flex-row 
                      justify-content-center align-items-center'
                      onClick={() => deleteDeliveryData()}>
                      <AiOutlineDelete size={20} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PackageModalComp;
