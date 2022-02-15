import React, { useState } from "react";
import Select from "react-select";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updatePackage } from "../../redux/actions/delivery-actions";
import ButtonLoading from "../../component/loading/button-loading";
import { AiFillSave } from "react-icons/ai";

const EditPackageComp = ({ dataList, loading, locations, regions }) => {
  const { id } = useParams();
  const [from_region_id, set_from_region_id] = useState(
    dataList.from_region_id
  );
  const [from_district_id, set_from_district_id] = useState(
    dataList.from_district_id
  );
  const [to_region_id, set_to_region_id] = useState(dataList.to_region_id);
  const [to_district_id, set_to_district_id] = useState(
    dataList.to_district_id
  );

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      from_region: dataList.from_region,
      from_region_id: dataList.from_region_id,
      from_district: dataList.from_district,
      from_district_id: dataList.from_district_id,
      vehicle_type: dataList.vehicle_type,
      delivery_fee_amount: dataList.delivery_fee_amount,
      from_address: dataList.from_address,
      updated_at: dataList.updated_at,
      insurance_amount: dataList.insurance_amount,
      recipient_name: dataList.recipient_name,
      recipient_phone: dataList.recipient_phone,
      to_address: dataList.to_address,
      to_region_id: dataList.to_region_id,
      matter: dataList.matter,
      to_district: dataList.to_district,
      to_district_id: dataList.to_district_id,
    },
  });

  const onSubmit = (edit) => {
    const formData = {
      from_region: edit.from_region,
      from_region_id: from_region_id,
      from_district: edit.from_district,
      from_district_id: from_district_id,
      to_region: edit.to_region,
      to_region_id: to_region_id,
      to_district: edit.to_district,
      to_district_id: to_district_id,
      delivery_fee_amount: edit.delivery_fee_amount,
      from_address: edit.from_address,
      updated_at: edit.updated_at,
      insurance_amount: edit.insurance_amount,
      recipient_name: edit.recipient_name,
      recipient_phone: edit.recipient_phone,
      to_address: edit.to_address,
      matter: edit.matter,
      vehicle_type: edit.vehicle_type,
    };
    dispatch(updatePackage(id, formData));
  };

  const fromRegion = locations.find((loc) => loc.id == from_region_id);

  const fromRegionItem = {
    label: fromRegion && fromRegion.name,
    value: fromRegion && fromRegion.id,
  };

  const fromDistrictList =
    fromRegion &&
    fromRegion.states.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    });

  const fromDistrict =
    fromRegion && fromRegion.states.find((i) => i.id == from_district_id);

  const fromDistrictItem = {
    label: fromDistrict && fromDistrict.name,
    value: fromDistrict && fromDistrict.id,
  };

  const toRegion = locations.find((loc) => loc.id == to_region_id);

  const toRegionItem = {
    label: toRegion && toRegion.name,
    value: toRegion && toRegion.id,
  };

  const toDistrict =
    toRegion && toRegion.states.find((i) => i.id == to_district_id);

  const toDistrictItem = {
    label: toDistrict && toDistrict.name,
    value: toDistrict && toDistrict.id,
  };

  const toDistrictList =
    toRegion &&
    toRegion.states.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    });

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)} className=''>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Qaysi viloyatdan ?</label>

              <Select
                className='border-info form-control p-0'
                id='fromRegion'
                options={regions}
                onChange={(option) => set_from_region_id(option.value)}
                defaultValue={fromRegionItem}
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Qaysi tumandan ?</label>
              <Select
                className='border-info form-control p-0'
                id='fromDistrict'
                options={fromDistrictList}
                onChange={(option) => set_from_district_id(option.value)}
                defaultValue={fromDistrictItem || {}}
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Mahalla</label>
              <input
                className='border-info form-control'
                type={"text"}
                defaultValue={dataList.from_address}
                {...register("from_address")}
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Qaysi viloyatga ?</label>
              <Select
                className='border-info form-control p-0'
                options={regions}
                defaultValue={toRegionItem || {}}
                onChange={(option) => set_to_region_id(option.value)}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Qaysi tumandanga ?</label>
              <Select
                options={toDistrictList}
                className='border-info form-control p-0'
                onChange={(option) => set_to_district_id(option.value)}
                defaultValue={toDistrictItem || {}}
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Mahalla</label>
              <input
                className='border-info form-control'
                type={"text"}
                defaultValue={dataList.to_address}
                {...register("to_address")}
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Mijozning ismi</label>
              <input
                className='border-info form-control'
                type={"text"}
                defaultValue={dataList.recipient_name}
                {...register("recipient_name")}
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Mijozning telefon raqami:</label>
              <input
                className='border-info form-control'
                type={"text"}
                defaultValue={dataList.recipient_phone}
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
                defaultValue={dataList.matter}
                {...register("matter")}
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Izoh</label>
              <input
                className='border-info form-control'
                type={"text"}
                defaultValue={dataList.note}
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
                defaultValue={dataList.insurance_amount}
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
                defaultValue={dataList.delivery_fee_amount}
                {...register("delivery_fee_amount")}
              />
            </div>
            <div className='col-12 col-lg-3 col-md-6 col-sm-12 mt-2'>
              <label>Jami summa</label>
              <input
                className='border-info form-control'
                type={"text"}
                defaultValue={dataList.cash_amount}
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

export default EditPackageComp;
