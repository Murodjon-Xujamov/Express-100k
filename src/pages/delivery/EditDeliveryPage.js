import React, { useState, useEffect } from "react";
import Select from "react-dropdown-select";
import { useLocation, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updatePackage } from "../../redux/actions/deliveryActions";
import { fetchLocations } from "../../redux/actions/commonActions";
import "../../assets/scss/_edit-delivery.scss";
import ButtonLoading from "../../component/loading/ButtonLoading";

const EditDeliveryPage = () => {
  const {
    state: { deliveryList },
  } = useLocation();
  const { id } = useParams();
  console.log("urlId", id);
  const [from_region_id, setFrom_region_id] = useState(
    deliveryList.from_region_id
  );
  const [to_region_id, setTo_region_id] = useState(deliveryList.to_region_id);
  // location logic here
  // const location = useLocation();
  //console.log("sd", location.state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocations());
  }, []);

  const loading = useSelector((state) => state.delivery.loading);
  const locations = useSelector((state) => state.common.locations);
  const region = locations.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      vehicle_type: deliveryList.vehicle_type,
      delivery_fee_amount: deliveryList.delivery_fee_amount,
      from_region_id: deliveryList.from_region_id,
      from_district: deliveryList.from_district,
      from_region: deliveryList.from_region,
      from_address: deliveryList.from_address,
      updated_at: deliveryList.updated_at,
      insurance_amount: deliveryList.insurance_amount,
      recipient_name: deliveryList.recipient_name,
      recipient_phone: deliveryList.recipient_phone,
      to_address: deliveryList.to_address,
      to_region_id: deliveryList.to_region_id,
      matter: deliveryList.matter,
    },
  });

  const deliveryId = deliveryList.id;

  const onSubmit = (edit) => {
    dispatch(updatePackage(deliveryId, edit));
  };

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

  const { recipient_phone, matter } = deliveryList;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='edit__grid_container'>
        <div className='row__column'>
          <label>Qaysi viloyatdan ?</label>
          <Select
            defaultValue={{
              label: `${deliveryList.region_name}`,
              value: deliveryList.region_id,
            }}
            {...register("from_region_id")}
            options={region}
            onChange={(option) => setFrom_region_id(option[0].value)}
          />
        </div>
        <div className='row__column'>
          <label>Qaysi tumandan ?</label>
          <Select options={fromDistrictList} />
        </div>
        <div className='row__column'>
          <label>Mahalla</label>
          <input
            type={"text"}
            defaultValue={deliveryList.from_address}
            {...register("from_address")}
          />
        </div>
        <div className='row__column'>
          <label>Qaysi viloyatga ?</label>
          <Select
            options={region}
            onChange={(option) => setTo_region_id(option[0].value)}
          />
        </div>
        <div className='row__column'>
          <label>Qaysi tumandanga ?</label>
          <Select options={toDistrictList} />
        </div>
        <div className='row__column'>
          <label>Mahalla</label>
          <input
            type={"text"}
            defaultValue={deliveryList.to_address}
            {...register("to_address")}
          />
        </div>
        <div className='row__column'>
          <label>Mijozning ismi</label>
          <input
            type={"text"}
            defaultValue={deliveryList.recipient_name}
            {...register("recipient_name")}
          />
        </div>
        <div className='row__column'>
          <label>Mijozning telefon raqami:</label>
          <input
            type={"text"}
            defaultValue={recipient_phone}
            {...register("recipient_phone")}
          />
        </div>
        <div className='row__column'>
          <label>Mahsulot nomi</label>
          <input type={"text"} defaultValue={matter} {...register("matter")} />
        </div>
        <div className='row__column'>
          <label>Izoh</label>
          <input
            type={"text"}
            defaultValue={deliveryList.note}
            {...register("note")}
          />
        </div>
        <div className='row__column'>
          <label>Transport turi</label>
          <select>
            <option value={"on_car"}>Yengil mashina</option>
          </select>
        </div>
        <div className='row__column'>
          <label>Sug'urta summasi</label>
          <input
            type={"text"}
            defaultValue={deliveryList.insurance_amount}
            {...register("insurance_amount")}
          />
        </div>
        <div className='row__column'>
          <label>Dastavka summasi</label>
          <input
            type={"text"}
            defaultValue={deliveryList.delivery_fee_amount}
            {...register("delivery_fee_amount")}
          />
        </div>
        <div className='row__column'>
          <label>Jami summa</label>
          <input
            type={"text"}
            defaultValue={deliveryList.cash_amount}
            {...register("cash_amount")}
          />
        </div>
        <div className='row__column'>
          <button type='submit'>
            O'zgarishlarni saqlash {loading ? <ButtonLoading /> : ""}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDeliveryPage;
