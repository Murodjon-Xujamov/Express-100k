import React from "react";
import { useSelector } from "react-redux";
import ProfileComp from "../../component/user-comp/profile-comp";
import ContentLoading from "../../component/loading/content-loading";

const ProfilePage = () => {
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
  const loading = useSelector((state) => state.user.loading);

  return (
    <>
      {loading ? (
        <ContentLoading />
      ) : (
        <ProfileComp
          avatar={avatar_url}
          name={name}
          surname={surname}
          address={address}
          username={username}
          gender={gender}
          region={region_name}
          district={district_name}
          loading={loading}
        />
      )}
    </>
  );
};

export default ProfilePage;
