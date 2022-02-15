import React, { useState, useEffect } from "react";
import avatarLoc from "../../assets/images/user-g6f6f69a6e_1280.png";
import { useDispatch } from "react-redux";
import { updateProfileImage } from "../../redux/actions/user-actions";
import { BsCameraFill } from "react-icons/bs";
import { AiFillSave } from "react-icons/ai";
import { useForm } from "react-hook-form";
import ButtonLoading from "../loading/button-loading";
import Select from "react-select";

const SettingsComp = ({
  userData,
  locations,
  updateProfileDatas,
  loading,
  regions,
}) => {
  const [region_id, set_region_id] = useState(userData.region_id);
  const [district_id, set_district_id] = useState(userData.district_id);

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: userData.name,
      surname: userData.surname,
      username: userData.username,
      address: userData.address,
      gender: userData.gender,
      region_id: userData.region_id,
      district_id: userData.district_id,
    },
  });

  const onSubmit = (edit) => {
    //console.log("edit", edit);
    const formsData = {
      name: edit.name,
      surname: edit.surname,
      username: edit.username,
      address: edit.address,
      gender: edit.gender,
      region_id: region_id,
      district_id: district_id,
    };
    updateProfileDatas(formsData);
  };

  const handleUploadAvatar = (file, element) => {
    const fileReader = new FileReader();
    fileReader.addEventListener("load", function (e) {
      element.src = e.target.value;
    });
    fileReader.readAsDataURL(file);
    dispatch(updateProfileImage(file));
  };

  const fromRegion = locations.find((loc) => loc.id === region_id);

  const fromRegionItem = {
    label: fromRegion && fromRegion.name,
    value: fromRegion && fromRegion.id,
  };

  const fromdDistrictList =
    fromRegion &&
    fromRegion.states.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    });

  const fromDistrict =
    fromRegion && fromRegion.states.find((i) => i.id == district_id);

  const districtItem = {
    label: fromDistrict && fromDistrict.name,
    value: fromDistrict && fromDistrict.id,
  };

  return (
    <div className='col-12 col-lg-12 col-md-12 col-sm-12  user__settings__container'>
      <h1>Sozlamalar</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-12 col-lg-12 col-md-12 col-sm-12 
              position-relative d-flex justify-content-center'>
              <img
                src={userData.avatar_url ? userData.avatar_url : avatarLoc}
                alt='avatar'
                className='align-center upload__avatar'
              />
              <label
                htmlFor='file'
                style={{ marginLeft: "60px" }}
                className='position-absolute top-50 start-50 d-flex justify-content-center
                translate-middle mt-5 p-2 bg-warning rounded-circle'>
                <BsCameraFill />
              </label>
            </div>
          </div>

          <input
            type={"file"}
            onChange={(e) =>
              handleUploadAvatar(
                e.target.files[0],
                document.querySelectorAll("#avatarImage")[0]
              )
            }
            id='file'
            className='upload__img'
          />

          <div className='row mt-2'>
            <div className='col-12 col-lg-6 col-md-12 col-sm-12'>
              <label htmlFor='name'>Ism</label>
              <input
                className='border-info form-control'
                type={"text"}
                id='name'
                placeholder='Ism'
                defaultValue={userData.name}
                {...register("name")}
              />
            </div>
            <div className='col-12 col-lg-6 col-md-12 col-sm-12'>
              <label htmlFor='surname'>Familiya</label>
              <input
                className='border-info form-control'
                type={"text"}
                id='surname'
                placeholder='Familiya'
                defaultValue={userData.surname}
                {...register("surname")}
              />
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-12 col-lg-6 col-md-12 col-sm-12'>
              <label htmlFor='phone__number'>Telefon raqam</label>
              <input
                className='border-info form-control'
                type={"tel"}
                id='phone__number'
                placeholder='Telefon raqam'
                disabled
                defaultValue={userData.username}
                {...register("username")}
              />
            </div>
            <div className='col-12 col-lg-6 col-md-12 col-sm-12'>
              <label htmlFor='region'>Viloyat</label>
              <Select
                className='border-info form-control p-0'
                id='fromRegion'
                options={regions}
                onChange={(option) => set_region_id(+option.value)}
                defaultValue={fromRegionItem || {}}
              />
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-12 col-lg-6 col-md-12 col-sm-12'>
              <label htmlFor='district'>Tuman</label>
              <Select
                className='border-info form-control p-0'
                id='fromDistrict'
                options={fromdDistrictList}
                onChange={(option) => set_district_id(+option.value)}
                defaultValue={districtItem || {}}
              />
            </div>
            <div className='col-12 col-lg-6 col-md-12 col-sm-12'>
              <label htmlFor='address'>Mahalla</label>
              <input
                className='border-info form-control'
                type='text'
                id='address'
                placeholder='Mahalla'
                defaultValue={userData.address}
                {...register("address")}
              />
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-12 col-lg-6 col-md-12 col-sm-12'>
              <label htmlFor='gender'>Jins</label>
              <select
                className='border-info form-control'
                id='gender'
                defaultValue={userData.gender}
                {...register("gender")}>
                <option value='' disabled>
                  Jinsni tanlang
                </option>
                <option value='male'>Erkak</option>
                <option value='female'>Ayol</option>
              </select>
            </div>
            <div className='col-12 col-lg-6 col-md-12 col-sm-12 '>
              <button className='btn btn-primary mt-4'>
                O'zgarishlarni saqlash
                {loading ? (
                  <ButtonLoading />
                ) : (
                  <AiFillSave className='save__icon' />
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingsComp;
