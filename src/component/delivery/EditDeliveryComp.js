import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-dropdown-select";
import "../../assets/scss/_edit-delivery.scss";
import { useSelector } from "react-redux";

const EditDeliveryComp = () => {
  return (
    <div>
      <div className='edit__grid_container'>
        <div className='row__column'>
          <label>Qaysi viloyatdan ?</label>
          <Select />
        </div>
        <div className='row__column'>
          <label>Qaysi tumandan ?</label>
          <Select />
        </div>
        <div className='row__column'>
          <label>Mahalla</label>
          <input type={"text"} />
        </div>
        <div className='row__column'>
          <label>Qaysi viloyatga ?</label>
          <Select />
        </div>
        <div className='row__column'>
          <label>Qaysi tumandanga ?</label>
          <Select />
        </div>
        <div className='row__column'>
          <label>Mahalla</label>
          <input type={"text"} />
        </div>
        <div className='row__column'>
          <label>Mijozning ismi</label>
          <input type={"text"} />
        </div>
        <div className='row__column'>
          <label>Mijozning telefon raqami:</label>
          <input type={"text"} />
        </div>
        <div className='row__column'>
          <label>Mahsulot nomi</label>
          <input type={"text"} />
        </div>
        <div className='row__column'>
          <label>Izoh</label>
          <input type={"text"} />
        </div>
        <div className='row__column'>
          <label>Transport turi</label>
          <input type={"text"} />
        </div>
        <div className='row__column'>
          <label>Dastavka summasi</label>
          <input type={"text"} />
        </div>
        <div className='row__column'>
          <label>Jami summa</label>
          <input type={"text"} />
        </div>
        <div className='row__column'>
          <button>O'zgarishlarni saqlash</button>
        </div>
      </div>
    </div>
  );
};

export default EditDeliveryComp;
