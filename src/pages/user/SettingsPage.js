import React, { useEffect } from "react";
import "../../assets/scss/_settings.scss";
import { useSelector, useDispatch } from "react-redux";
import UserSettingsComp from "../../component/user/UserSettingsComp";
import { profileInfo } from "../../redux/actions/userActions";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const { avatar_url } = useSelector((state) => state.user.data);
  useEffect(() => {
    dispatch(profileInfo());
  }, []);
  return (
    <div>
      <UserSettingsComp userAvatar={avatar_url} />
    </div>
  );
};

export default SettingsPage;
