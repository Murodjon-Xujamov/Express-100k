import React from "react";
import "../../assets/scss/main.scss";
import { FaUserTie } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logout = () => {
    window.localStorage.removeItem("@token");
    window.location.reload();
  };

  const confirmLogout = () => {
    if (window.confirm("Haqiqatan chiqmoqchimisiz")) {
      return logout();
    } else {
      return console.log("false");
    }
  };
  return (
    <div className='navbar__g'>
      <div className='navbar__flex'>
        <h2>
          <span className='express__logo'>Expr</span>ess
        </h2>

        <div className='navbar__link__items'>
          <Link to='/'>
            <div className='navbar__link__item'>
              <FaUserTie size={21} style={{ cursor: "pointer" }} />
            </div>
          </Link>

          <Link to='/settings'>
            <div className='navbar__link__item'>
              <FiSettings size={21} style={{ cursor: "pointer" }} />
            </div>
          </Link>

          <div className='navbar__link__item'>
            <IoMdExit
              size={21}
              color='red'
              style={{ cursor: "pointer" }}
              onClick={confirmLogout}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
