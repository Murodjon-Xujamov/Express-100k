import React from "react";
import avatarLoc from "../../assets/images/user-g6f6f69a6e_1280.png";
import { AiOutlineSend, AiOutlineInfoCircle } from "react-icons/ai";

const ProfileComp = ({
  avatar,
  name,
  surname,
  gender,
  region,
  district,
  address,
  username,
}) => {
  return (
    <div className='profile__comp__container'>
      <div className='user__card'>
        <img src={avatar ? avatar : avatarLoc} alt='avatar' />
        <header>
          <h5>{name}</h5>
          <h5>{surname}</h5>
        </header>
        <div className='info__row'>
          <h4>Jins:</h4>
          <h4>{gender === "male" ? "Erkak" : "Ayol"}</h4>
        </div>
        <div className='info__row'>
          <h4>Viloyat:</h4>
          <h4>{region}</h4>
        </div>
        <div className='info__row'>
          <h4>Tuman: </h4>
          <h4>{district}</h4>
        </div>
        <div className='info__row'>
          <h4>Mahalla:</h4>
          <h4>{address}</h4>
        </div>
        <div className='info__row'>
          <h4>Telefon raqam:</h4>
          <h4>{username}</h4>
        </div>
      </div>
      <div className='user__card'>
        <h2>Hisobni To'ldirish</h2>
        <p>Kiritmoqchi boʻlgan pulingizni (UZS) buyicha kiriting</p>
        <input type='number' />
        <p>
          Pulni kiritgan vaqtiz darhol payme.uz bo'lmiga o'tadi va karta raqami
          yoki telefon raqamingizni kiritasiz va sizni hisobingiz to'ldiriladi.
        </p>
        <div>
          <button className='btn border-success bg-success text-white'>
            Jo'natish {""}
            <AiOutlineSend />
          </button>
          <button className='btn border-info bg-info text-white'>
            To'lovlar tarixi{""} <AiOutlineInfoCircle />
          </button>
        </div>
        <img
          src='https://cdn.paycom.uz/documentation_assets/payme_01.svg'
          alt='payme'
          className='payme__img'
        />
      </div>
    </div>
  );
};

export default ProfileComp;
