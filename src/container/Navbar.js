import React from "react";
import "../assets/scss/_navbar.scss";
import { FaUserTie } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BsBell, BsHeadset } from "react-icons/bs";
import { IoMdExit } from "react-icons/io";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar__g'>
      <div className='navbar__flex'>
        <h2>
          <span className='express__logo'>Expr</span>ess
        </h2>
        <div className='navbar__link__items'>
          <div className='balans__price__increase'>
            + 20000.00 sum <TiArrowSortedUp />
          </div>
          <div className='balans__price__drop'>
            - 10000.00 sum <TiArrowSortedDown />
          </div>
        </div>
        <div className='navbar__link__items'>
          <Link to='/'>
            <div className='navbar__link__item'>
              <FaUserTie size={21} style={{ cursor: "pointer" }} />
            </div>
          </Link>
          <div className='navbar__link__item'>
            <BsBell size={21} style={{ cursor: "pointer" }} />
          </div>
          <Link to='/settings'>
            <div className='navbar__link__item'>
              <FiSettings size={21} style={{ cursor: "pointer" }} />
            </div>
          </Link>
          <div className='navbar__link__item'>
            <BsHeadset size={21} style={{ cursor: "pointer" }} />
          </div>
          <div className='navbar__link__item'>
            <IoMdExit size={21} style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
