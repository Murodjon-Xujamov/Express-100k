import React from "react";
import { Oval } from "react-loader-spinner";
import "../../assets/scss/loading.scss";

const ButtonLoading = () => {
  return (
    <div className='btn__loading'>
      <Oval color='#FFF' height={15} width={15} />
    </div>
  );
};

export default ButtonLoading;
