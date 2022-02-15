import React from "react";
import { useSelector } from "react-redux";

const Alert = ({ message }) => {
  return (
    <>
      {/* <button type='button' class='btn btn-primary' id='liveToastBtn'>
        Show live toast
      </button> */}

      <div class='position-fixed bottom-0 end-0 p-3' style='z-index: 11'>
        <div
          id='liveToast'
          class='toast hide'
          role='alert'
          aria-live='assertive'
          aria-atomic='true'>
          <div class='toast-header'>
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='toast'
              aria-label='Close'></button>
          </div>
          <div class='toast-body'>{message}</div>
        </div>
      </div>
    </>
  );
};

export default Alert;
