import React, { useEffect } from "react";
import "../../assets/scss/profile.scss";
import { useSelector, useDispatch } from "react-redux";
import ProfileComp from "../../component/user-comp/profile-comp";
import { profileInfo } from "../../redux/actions/user-actions";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const {
    avatar_url,
    username,
    name,
    surname,
    address,
    region_name,
    district_name,
    gender,
  } = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(profileInfo());
  }, []);
  return (
    <>
      <ProfileComp
        avatar={avatar_url}
        name={name}
        surname={surname}
        address={address}
        username={username}
        gender={gender}
        region={region_name}
        district={district_name}
      />
    </>
  );
};

export default ProfilePage;
