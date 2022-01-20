import React, { useState, useEffect } from "react";
import Select from "react-dropdown-select";
import "../../assets/scss/_settings.scss";
import avatarLoc from "../../assets/images/user-g6f6f69a6e_1280.png";
import { useDispatch } from "react-redux";
import { updateProfileImage } from "../../redux/actions/userActions";
import { BsCameraFill } from "react-icons/bs";

const UserSettingsComp = ({ userData, locations }) => {
  const [country, setCountry] = useState(userData.region_id);
  const dispatch = useDispatch();
  console.log("loc", locations);

  const handleUploadAvatar = (file, element) => {
    const fileReader = new FileReader();
    fileReader.addEventListener("load", function (e) {
      element.src = e.target.value;
    });
    fileReader.readAsDataURL(file);
    dispatch(updateProfileImage(file));
  };

  useEffect(() => {
    dispatch({ type: "clear_success_message_avatar" });
  }, []);

  return (
    <div className='user__settings__container'>
      <h1>Sozlamalar</h1>
      <div className='form'>
        <img
          src={userData.avatar_url ? userData.avatar_url : avatarLoc}
          alt='avatar'
          className='upload__avatar'
        />
        <div className='container__row'>
          <label htmlFor='file' className='camera__icon'>
            <BsCameraFill />
          </label>
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
        </div>
        <div className='container__row'>
          <div className='row__column'>
            <label htmlFor='name'>Ism</label>
            <input
              type={"text"}
              id='name'
              placeholder='Ism'
              defaultValue={userData.name}
            />
          </div>
          <div className='row__column'>
            <label htmlFor='surname'>Familiya</label>
            <input
              type={"text"}
              id='surname'
              placeholder='Familiya'
              defaultValue={userData.surname}
            />
          </div>
        </div>
        <div className='container__row'>
          <div className='row__column'>
            <label htmlFor='phone__number'>Telefon raqam</label>
            <input
              type={"tel"}
              id='phone__number'
              placeholder='Telefon raqam'
              disabled
              defaultValue={userData.username}
            />
          </div>
          <div className='row__column'>
            <label htmlFor='region'>Viloyat</label>
            <select
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              defaultValue={userData.region_name}>
              <option disabled>Viloyatni tanlang</option>
              {locations.map((i) => (
                <option key={i.id} value={i.id}>
                  {i.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='container__row'>
          <div className='row__column'>
            <label htmlFor='district'>Tuman</label>
            <select defaultValue={userData.state_id}>
              <option disabled>Tumanni tanlang</option>
              {(() => {
                const selectedLoc = locations.find((loc) => loc.id == country);
                if (selectedLoc && selectedLoc.states) {
                  return selectedLoc.states.map((state) => (
                    <option value={state.id} key={state.id}>
                      {state.name}
                    </option>
                  ));
                }
              })()}
            </select>
          </div>
          <div className='row__column'>
            <label htmlFor='address'>Mahalla</label>
            <input
              type='text'
              id='address'
              placeholder='Mahalla'
              defaultValue={userData.address}
            />
          </div>
        </div>
        <div className='container__row'>
          <div className='row__column'>
            <label htmlFor='gender'>Jins</label>
            <select defaultValue={userData.gender}>
              <option disabled>Jinsni tanlang</option>
              <option value={"male"}>Erkak</option>
              <option value={"female"}>Ayol</option>
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
