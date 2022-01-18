import React from "react";
import Select from "react-dropdown-select";
import { AiOutlineSave } from "react-icons/ai";

const UserSettingsComp = () => {
  return (
    <div className='user__settings__container'>
      <h1>Sozlamalar</h1>
      <div className='container__row'>
        <header>Ism, Familiya, Tel raqam</header>
        <div>
          <input type={"text"} placeholder='Ism' />
          <input type={"text"} placeholder='Familiya' />
          <input type={"tel"} placeholder='Telefon raqam' />
        </div>
      </div>
      <div className='container__row'>
        <header>Joylashuv</header>
        <div>
          <Select
            id='fromRegion'
            className='select__location'
            placeholder='Viloyat'
            options={"options"}
            onChange={(values) => this.setValues(values)}
          />
          <Select
            id='fromRegion'
            placeholder='Tuman'
            className='select__location'
            options={"options"}
            onChange={(values) => this.setValues(values)}
          />
          <input type='text' placeholder='Mahalla' />
        </div>
      </div>
      <div className='container__row'>
        <header>Jins, Karta raqami</header>

        <div>
          <button>Erkak</button>
          <button>Ayol</button>
          <input type='text' placeholder='Karta raqami' />
        </div>
      </div>
      <div className='save__btn'>
        <button>
          O'zgarishlarni saqlash{""} <AiOutlineSave />
        </button>
      </div>
    </div>
  );
};

export default UserSettingsComp;
