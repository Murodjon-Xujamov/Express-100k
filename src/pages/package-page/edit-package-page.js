import React, { useState, useEffect } from "react";
import Select from "react-dropdown-select";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePackage,
  fetchDeliveryOne,
} from "../../redux/actions/delivery-actions";
import { fetchLocations } from "../../redux/actions/common-actions";
import ButtonLoading from "../../component/loading/button-loading";
import { AiFillSave } from "react-icons/ai";

const EditPackagePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocations());
    dispatch(fetchDeliveryOne(id));
  }, [id]);

  const editDatas = useSelector((state) => state.delivery.delivery);
  const loading = useSelector((state) => state.delivery.loading);
  const locations = useSelector((state) => state.common.locations);
  const region = locations.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });
  const [from_region_id, setFrom_region_id] = useState(
    editDatas.from_region_id
  );
  const [to_region_id, setTo_region_id] = useState(editDatas.to_region_id);

  useEffect(() => {}, []);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      vehicle_type: editDatas.vehicle_type,
      delivery_fee_amount: editDatas.delivery_fee_amount,
      from_region_id: editDatas.from_region_id,
      from_district: editDatas.from_district,
      from_region: editDatas.from_region,
      from_address: editDatas.from_address,
      updated_at: editDatas.updated_at,
      insurance_amount: editDatas.insurance_amount,
      recipient_name: editDatas.recipient_name,
      recipient_phone: editDatas.recipient_phone,
      to_address: editDatas.to_address,
      to_region_id: editDatas.to_region_id,
      matter: editDatas.matter,
    },
  });

  const onSubmit = (edit) => {
    dispatch(updatePackage(id, edit));
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

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=''>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Qaysi viloyatdan ?</label>
              <Select
                className='border-info form-control'
                selectedValue={{
                  label: `${editDatas.region_name}`,
                  value: editDatas.region_id,
                }}
                {...register("from_region_id")}
                options={region}
                onChange={(option) => setFrom_region_id(option[0].value)}
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Qaysi tumandan ?</label>
              <Select
                options={fromDistrictList}
                selectedValue
                className='border-info form-control'
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Mahalla</label>
              <input
                className='border-info form-control'
                type={"text"}
                defaultValue={editDatas.from_address}
                {...register("from_address")}
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Qaysi viloyatga ?</label>
              <Select
                className='border-info form-control'
                options={region}
                onChange={(option) => setTo_region_id(option[0].value)}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Qaysi tumandanga ?</label>
              <Select
                options={toDistrictList}
                className='border-info form-control'
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Mahalla</label>
              <input
                className='border-info form-control'
                type={"text"}
                defaultValue={editDatas.to_address}
                {...register("to_address")}
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Mijozning ismi</label>
              <input
                className='border-info form-control'
                type={"text"}
                defaultValue={editDatas.recipient_name}
                {...register("recipient_name")}
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Mijozning telefon raqami:</label>
              <input
                className='border-info form-control'
                type={"text"}
                defaultValue={editDatas.recipient_phone}
                {...register("recipient_phone")}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Mahsulot nomi</label>
              <input
                className='border-info form-control'
                type={"text"}
                defaultValue={editDatas.matter}
                {...register("matter")}
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Izoh</label>
              <input
                className='border-info form-control'
                type={"text"}
                defaultValue={editDatas.note}
                {...register("note")}
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Transport turi</label>
              <select className='border-info form-control'>
                <option value={"on_car"}>Yengil mashina</option>
              </select>
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Sug'urta summasi</label>
              <input
                className='border-info form-control'
                type={"text"}
                defaultValue={editDatas.insurance_amount}
                {...register("insurance_amount")}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Dastavka summasi</label>
              <input
                className='border-info form-control'
                type={"text"}
                defaultValue={editDatas.delivery_fee_amount}
                {...register("delivery_fee_amount")}
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Jami summa</label>
              <input
                className='border-info form-control'
                type={"text"}
                defaultValue={editDatas.cash_amount}
                {...register("cash_amount")}
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <button
                type='submit'
                className='btn border-info bg-info text-white mt-4'>
                O'zgarishlarni saqlash{" "}
                {loading ? (
                  <ButtonLoading />
                ) : (
                  <AiFillSave className='save__icon' />
                )}
              </button>
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPackagePage;
