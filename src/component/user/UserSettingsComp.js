import React from "react";
import Select from "react-dropdown-select";
import "../../assets/scss/_settings.scss";

const UserSettingsComp = () => {
  return (
    <div className='user__settings__container'>
      <h1>Sozlamalar</h1>
      <div className='form'>
        <div className='container__row'>
          <div className='row__column'>
            <label htmlFor='name'>Ism</label>
            <input type={"text"} id='name' placeholder='Ism' />
          </div>
          <div className='row__column'>
            <label htmlFor='surname'>Familiya</label>
            <input type={"text"} id='surname' placeholder='Familiya' />
          </div>
          <div className='row__column'>
            <label htmlFor='phone__number'>Telefon raqam</label>
            <input
              type={"tel"}
              id='phone__number'
              placeholder='Telefon raqam'
            />
          </div>
        </div>
        <div className='container__row'>
          <div className='row__column'>
            <label htmlFor='region'>Viloyat</label>
            <select>
              <option disabled>Viloyatni tanlang</option>
            </select>
          </div>

          <div className='row__column'>
            <label htmlFor='district'>Tuman</label>
            <select>
              <option disabled>Tumanni tanlang</option>
            </select>
          </div>
          <div className='row__column'>
            <label htmlFor='address'>Mahalla</label>
            <input type='text' id='address' placeholder='Mahalla' />
          </div>
        </div>
        <div className='container__row'>
          <div className='row__column'>
            <label htmlFor='gender'>Jins</label>
            <select>
              <option disabled>Jinsni tanlang</option>
              <option>Erkak</option>
              <option>Ayol</option>
            </select>
          </div>
          <div className='row__column'>
            <button className='save__btn'>O'zgarishlarni saqlash</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsComp;
