import React from "react";
import "../../assets/scss/user.scss";
import { useSelector, useDispatch } from "react-redux";
import SettingsComp from "../../component/user-comp/settings-comp";
import { updateProfileData } from "../../redux/actions/user-actions";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const locations = useSelector((state) => state.common.locations);

  return (
    <div className='settings__page__container'>
      <SettingsComp
        userData={userData.data}
        locations={locations}
        updateProfileDatas={(edit) => dispatch(updateProfileData(edit))}
        loading={userData.loading}
      />
    </div>
  );
};

export default SettingsPage;
