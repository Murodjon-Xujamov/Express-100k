import React, { useEffect } from "react";
import Select from "react-dropdown-select";
import "../../assets/scss/_settings.scss";
import avatarLoc from "../../assets/images/user-g6f6f69a6e_1280.png";
import { useDispatch } from "react-redux";
import { updateProfileImage } from "../../redux/actions/userActions";
import { BsCameraFill } from "react-icons/bs";

const UserSettingsComp = ({ userAvatar }) => {
  const dispatch = useDispatch();

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
          src={userAvatar ? userAvatar : avatarLoc}
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
            <input type={"text"} id='name' placeholder='Ism' />
          </div>
          <div className='row__column'>
            <label htmlFor='surname'>Familiya</label>
            <input type={"text"} id='surname' placeholder='Familiya' />
          </div>
        </div>
        <div className='container__row'>
          <div className='row__column'>
            <label htmlFor='phone__number'>Telefon raqam</label>
            <input
              type={"tel"}
              id='phone__number'
              placeholder='Telefon raqam'
            />
          </div>
          <div className='row__column'>
            <label htmlFor='region'>Viloyat</label>
            <select>
              <option disabled>Viloyatni tanlang</option>
            </select>
          </div>
        </div>
        <div className='container__row'>
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
