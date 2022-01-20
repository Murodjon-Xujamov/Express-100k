import React, { useEffect } from "react";
import "../../assets/scss/_settings.scss";
import { useSelector, useDispatch } from "react-redux";
import UserSettingsComp from "../../component/user/UserSettingsComp";
import { profileInfo } from "../../redux/actions/userActions";
import { fetchLocations } from "../../redux/actions/commonActions";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);
  const locations = useSelector((state) => state.common.locations);

  useEffect(() => {
    dispatch(profileInfo());
    dispatch(fetchLocations());
  }, []);
  return (
    <div>
      <UserSettingsComp userData={userData} locations={locations} />
    </div>
  );
};

export default SettingsPage;
