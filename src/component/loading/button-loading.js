import React from "react";
import "../../assets/scss/loading.scss";

const ButtonLoading = () => {
  return (
    <span
      className='spinner-border spinner-border-sm ms-2'
      role='status'
      aria-hidden='true'></span>
  );
};

export default ButtonLoading;
