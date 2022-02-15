import React from "react";
import "../../assets/scss/user.scss";
import { useSelector, useDispatch } from "react-redux";
import SettingsComp from "../../component/user-comp/settings-comp";
import { updateProfileData } from "../../redux/actions/user-actions";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);
  const locations = useSelector((state) => state.common.locations);

  const regions = locations.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });

  return (
    <div className='settings__page__container'>
      {userData.id && (
        <SettingsComp
          regions={regions}
          userData={userData}
          locations={locations}
          updateProfileDatas={(edit) => dispatch(updateProfileData(edit))}
          loading={userData.loading}
        />
      )}
    </div>
  );
};

export default SettingsPage;
