import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/_sidebar.scss";
import { BiTaxi, BiAddToQueue } from "react-icons/bi";
import { BsArrowLeftRight, BsQuestionCircle } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

const Sedibar = () => {
  return (
    <div className='sedibar__main'>
      <div className='sedibar__main'>
        <Link to={"/profile"}>
          <h2>Express</h2>
        </Link>
        <Link to={"/package"}>
          <div className='sidebar__box__icon'>
            <BiTaxi size={30} />
          </div>
        </Link>
        <Link to={"/packages-list"}>
          <div className='sidebar__box__icon'>
            <BsArrowLeftRight size={30} />
          </div>
        </Link>
        <Link to={"/delivery"}>
          <div className='sidebar__box__icon'>
            <FaUsers size={30} />
          </div>
        </Link>
        <Link to={"/package/create-package"}>
          <div className='sidebar__box__icon'>
            <BiAddToQueue size={30} />
          </div>
        </Link>
        <Link to={"/delivery"}>
          <div className='sidebar__box__icon'>
            <BsQuestionCircle size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sedibar;
