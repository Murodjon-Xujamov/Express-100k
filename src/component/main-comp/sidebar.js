import React from "react";
import "../../assets/scss/main.scss";
import { Link } from "react-router-dom";
import { BiTaxi, BiAddToQueue } from "react-icons/bi";
import { BsArrowLeftRight, BsQuestionCircle } from "react-icons/bs";

import paths from "../../routes/paths";

const Sidebar = () => {
  return (
    <div className='sidebar__main'>
      <div className='sidebar__main'>
        <Link to={"/profile"}>
          <h2>Express</h2>
        </Link>
        <Link to={paths.packagePath}>
          <div className='sidebar__box__icon'>
            <BiTaxi size={30} />
          </div>
        </Link>
        <Link to={"/packages-list"}>
          <div className='sidebar__box__icon'>
            <BsArrowLeftRight size={30} />
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

export default Sidebar;
