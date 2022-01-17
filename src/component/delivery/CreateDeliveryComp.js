import React from "react";
import "../../assets/scss/_create-delivery.scss";
import Select from "react-dropdown-select";
import { RiSendPlane2Line } from "react-icons/ri";

const CreateDeliveryComp = () => {
  return (
    <div className='create__delivery__page'>
      <h1>Pochta qo'shish</h1>
      <div className='create__delivery__grid'>
        <div className='grid__columns'>
          <label htmlFor='fromRegion'>Qaysi viloyatdan ?</label>
          <Select
            id='fromRegion'
            className='select__location'
            options={"options"}
            onChange={(values) => this.setValues(values)}
          />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromDistrict'>Qaysi tumandan ?</label>
          <Select
            id='fromDistrict'
            className='select__location'
            options={"options"}
            onChange={(values) => this.setValues(values)}
          />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromAddress'>Qaysi mahalladan ?</label>
          <input id='fromAddress' type={"text"} defaultValue={"Yashnobod"} />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromRegion'>Qaysi viloyatga ?</label>
          <Select
            id='fromRegion'
            className='select__location'
            options={"options"}
            onChange={(values) => this.setValues(values)}
          />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromDistrict'>Qaysi tumanga ?</label>
          <Select
            id='fromDistrict'
            className='select__location'
            options={"options"}
            onChange={(values) => this.setValues(values)}
          />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromAddress'>Qaysi mahallaga ?</label>
          <input id='fromAddress' type={"text"} defaultValue={"To address"} />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromAddress'>Mijozning ismi :</label>
          <input id='fromAddress' type={"text"} />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromAddress'>Mijozning telefon raqami:</label>
          <input id='fromAddress' type={"text"} />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromAddress'>Mahsulot nomi:</label>
          <input id='fromAddress' type={"text"} />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromAddress'>Izoh:</label>
          <input id='fromAddress' type={"text"} />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromAddress'>Yetkazib berish summasi:</label>
          <input id='fromAddress' type={"text"} />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromAddress'>Jami summa:</label>
          <input id='fromAddress' type={"text"} />
        </div>
        <div className='grid__columns'>
          <button>
            Yuborish {""}
            <RiSendPlane2Line className='send__icon' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateDeliveryComp;
