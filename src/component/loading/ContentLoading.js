import React from "react";
import { BallTriangle } from "react-loader-spinner";
import "../../assets/scss/_loading.scss";

const ContentLoading = () => {
  return (
    <div className='content__loading__container'>
      <BallTriangle color='#00BFFF' height={170} width={170} />
    </div>
  );
};

export default ContentLoading;
