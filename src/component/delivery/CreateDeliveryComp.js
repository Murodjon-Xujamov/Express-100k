import "../../assets/scss/_create-delivery.scss";
import React, { useState } from "react";
import Select from "react-dropdown-select";
import { RiSendPlane2Line } from "react-icons/ri";
import { MutatingDots, Oval } from "react-loader-spinner";
import ButtonLoading from "../loading/ButtonLoading";

const CreateDeliveryComp = ({
  loading,
  userInfo,
  locations,
  regions,
  onClickCreateDelivery,
}) => {
  const [from_region_id, set_from_region_id] = useState(userInfo?.region_id);
  const [from_district_id, set_from_district_id] = useState(
    userInfo?.district_id
  );
  const [from_address, set_from_address] = useState(userInfo?.address);
  const [to_region_id, set_to_region_id] = useState("");

  const [to_district_id, set_to_district_id] = useState("");
  const [to_address, set_to_address] = useState("");
  const [recipient_phone, set_recipient_phone] = useState("");
  const [recipient_name, set_recipient_name] = useState("");
  const [vehicle_type, set_vehicle_type] = useState("on_car");
  const [matter, set_matter] = useState("");
  const [note, set_note] = useState("");
  const [cash_amount, set_cash_amount] = useState("");
  const [delivery_fee_amount, set_delivery_fee_amount] = useState("");
  const [insurance_amount, set_insurance_amount] = useState("");

  const fromDistrict = locations.filter((loc) => loc.id == from_region_id);
  const fromDistrictList =
    fromDistrict &&
    fromDistrict[0]?.states.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    });

  const toDistrict = locations.filter((loc) => loc.id == to_region_id);

  const toDistrictList =
    toDistrict &&
    toDistrict[0]?.states.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    });

  return (
    <div className='create__delivery__page'>
      <h1>Pochta qo'shish</h1>
      <div className='create__delivery__grid'>
        <div className='grid__columns'>
          <label htmlFor='fromRegion'>Qaysi viloyatdan ?</label>
          <Select
            id='fromRegion'
            className='select__location'
            options={regions}
            onChange={(value) => set_from_region_id(value[0].value)}
            defaultValue={{
              label: `${userInfo.region_name}`,
              value: userInfo.region_id,
            }}
          />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromDistrict'>Qaysi tumandan ?</label>
          <Select
            id='fromDistrict'
            className='select__location'
            options={fromDistrictList}
            onChange={(option) => set_from_district_id(option[0].value)}
          />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromAddress'>Qaysi mahalladan ?</label>
          <input
            id='fromAddress'
            type={"text"}
            onChange={(e) => set_from_address(e.target.value)}
            defaultValue={userInfo?.address}
          />
        </div>
        <div className='grid__columns'>
          <label htmlFor='toRegion'>Qaysi viloyatga ?</label>
          <Select
            id='toRegion'
            className='select__location'
            options={regions}
            onChange={(value) => set_to_region_id(value[0].value)}
          />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromDistrict'>Qaysi tumanga ?</label>
          <Select
            id='fromDistrict'
            className='select__location'
            options={toDistrictList}
            onChange={(option) => set_to_district_id(option[0].value)}
          />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromAddress'>Qaysi mahallaga ?</label>
          <input
            id='fromAddress'
            type={"text"}
            value={to_address}
            onChange={(e) => set_to_address(e.target.value)}
          />
        </div>
        <div className='grid__columns'>
          <label htmlFor='clientName'>Mijozning ismi :</label>
          <input
            id='clientName'
            type={"text"}
            value={recipient_name}
            onChange={(e) => set_recipient_name(e.target.value)}
          />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromAddress'>Mijozning telefon raqami:</label>
          <input
            id='fromAddress'
            type={"text"}
            value={recipient_phone}
            onChange={(e) => set_recipient_phone(e.target.value)}
          />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromAddress'>Mahsulot nomi:</label>
          <input
            id='fromAddress'
            type={"text"}
            value={matter}
            onChange={(e) => set_matter(e.target.value)}
          />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromAddress'>Izoh:</label>
          <input
            id='fromAddress'
            type={"text"}
            value={note}
            onChange={(e) => set_note(e.target.value)}
          />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromAddress'>Yetkazib berish summasi:</label>
          <input
            id='fromAddress'
            type='number'
            value={delivery_fee_amount}
            onChange={(e) => set_delivery_fee_amount(e.target.value)}
          />
        </div>
        <div className='grid__columns'>
          <label htmlFor='fromAddress'>Jami summa:</label>
          <input
            id='fromAddress'
            type='number'
            value={cash_amount}
            onChange={(e) => set_cash_amount(e.target.value)}
          />
        </div>
        <div className='grid__columns'>
          <label htmlFor='vehicleType'>Avtomobil turi</label>
          <select
            className='select__location'
            onChange={(e) => set_vehicle_type(e.target.value)}>
            <option value={vehicle_type}>yengil</option>
          </select>
        </div>
        <div className='grid__columns'>
          <button
            onClick={() =>
              onClickCreateDelivery({
                from_region_id,
                from_district_id,
                from_address,
                to_region_id,
                to_district_id,
                to_address,
                recipient_phone,
                recipient_name,
                vehicle_type,
                matter,
                note,
                cash_amount,
                delivery_fee_amount,
                // insurance_amount,
              })
            }>
            Yuborish {""}
            {loading ? (
              <ButtonLoading />
            ) : (
              <RiSendPlane2Line className='send__icon' />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateDeliveryComp;
