import React, { useState } from "react";
import avatarLoc from "../../assets/images/user-g6f6f69a6e_1280.png";
import { AiOutlineSend, AiOutlineInfoCircle } from "react-icons/ai";
import { moneyLoss } from "../../redux/actions/user-actions";
import { useDispatch } from "react-redux";
import ButtonLoading from "../loading/button-loading";

const ProfileComp = ({
  avatar,
  name,
  surname,
  gender,
  region,
  district,
  address,
  username,
  loading,
}) => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <div className='row d-flex justify-content-evenly align-items-start'>
        <div className='col-12 col-lg-5 col-md-9 overflow-auto  mt-3 col-sm-12 rounded shadow px-3 py-5 rounded'>
          <div className='col d-flex justify-content-center'>
            <img
              src={avatar ? avatar : avatarLoc}
              style={{ width: "150px", height: "150px" }}
              alt='avatar'
              className='border border-3 rounded-circle'
            />
          </div>
          <div className='col-12'>
            <header className='d-flex justify-content-center '>
              <h4 className='m-2'>{name}</h4> <h4 className='m-2'>{surname}</h4>
            </header>
          </div>
          <div className='col-12 d-flex justify-content-between'>
            <h6 className='col-4 col-lg-6 col-md-5 col-sm-4 text-secondary'>
              Jins:
            </h6>
            <h5 className='col-8 col-lg-6 col-md-7 col-sm-8 text-end text-break'>
              {gender === "male" ? "Erkak" : "Ayol"}
            </h5>
          </div>
          <div className='col-12 d-flex justify-content-between'>
            <h6 className='col-4 col-lg-6 col-md-5 col-sm-4 text-secondary'>
              Viloyat:
            </h6>
            <h5 className='col-8 col-lg-6 col-md-7 col-sm-8 text-end text-break'>
              {region}
            </h5>
          </div>
          <div className='col-12 d-flex justify-content-between'>
            <h6 className='col-4 col-lg-6 col-md-5 col-sm-4 text-secondary'>
              Tuman:{" "}
            </h6>
            <h5 className='col-8 col-lg-6 col-md-7 col-sm-8 text-end text-break'>
              {district}
            </h5>
          </div>
          <div className='col-12 d-flex justify-content-between'>
            <h6 className='col-4 col-lg-6 col-md-5 col-sm-4 text-secondary'>
              Mahalla:
            </h6>
            <h5 className='col-8 col-lg-6 col-md-7 col-sm-8 text-end text-break'>
              {address}
            </h5>
          </div>
          <div className='col-12  d-flex justify-content-between'>
            <h6 className='col-4 col-lg-6 col-md-5 col-sm-4 text-secondary'>
              Telefon raqam:
            </h6>
            <h5 className='col-8 col-lg-6 col-md-7 col-sm-8 text-end text-break'>
              {username}
            </h5>
          </div>
        </div>
        <div className='col-12 col-lg-5 col-md-9 mt-3 col-sm-12 rounded shadow p-3 rounded'>
          <div className='col-12'>
            <h2>Hisobni To'ldirish</h2>
          </div>
          <div className='col-12'>
            <p>Kiritmoqchi boʻlgan pulingizni (UZS) buyicha kiriting</p>
          </div>
          <div className='col-12'>
            <input
              type='number'
              onChange={(e) => setAmount(e.target.value)}
              className='w-100 p-2 border border-info'
            />
          </div>
          <div className='col-12'>
            <p className='mt-3'>
              Pulni kiritgan vaqtiz darhol payme.uz bo'lmiga o'tadi va karta
              raqami yoki telefon raqamingizni kiritasiz va sizni hisobingiz
              to'ldiriladi.
            </p>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-6 col-md-6 col-sm-12 mt-2'>
              <button
                onClick={() => dispatch(moneyLoss(amount))}
                className='btn border-success bg-success text-white w-100'>
                Jo'natish {""}
                {loading ? <ButtonLoading /> : <AiOutlineSend />}
              </button>
            </div>
            <div className='col-12 col-lg-6 col-md-6 col-sm-12 mt-2'>
              <button className='btn border-info bg-info text-white w-100'>
                To'lovlar tarixi{""} <AiOutlineInfoCircle />
              </button>
            </div>
          </div>
          <div className='col-12'>
            <img
              src='https://cdn.paycom.uz/documentation_assets/payme_01.svg'
              alt='payme'
              className='w-100 mt-3'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComp;
