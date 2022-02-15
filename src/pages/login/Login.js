import React, { useEffect, useState } from "react";
import "../../assets/scss/user.scss";
import { SiGnuprivacyguard } from "react-icons/si";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authLogin, authPassword } from "../../redux/actions/user-actions";
import { Route } from "react-router-dom";
import PackagesPage from "../package-page/packages-page";
import logo from "../../assets/icons/Logo(1).svg";
import ProfilePage from "../user/profile-page";
import Alert from "../../component/alert";

const Login = () => {
  const [{ username, password }, setUser] = useState({
    username: "+998 ",
    password: "",
  });

  const { loginStep, loading, token, message } = useSelector(
    (state) => state.user
  );

  console.log("message", message);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== null) {
      <Route path='/' element={<ProfilePage />} />;
      window.location.reload();
    }
  }, [token]);

  const handleLogin = () => {
    dispatch(authLogin({ username, password }));
  };

  const handleUsername = (e) => {
    setUser((prevState) => ({ ...prevState, username: e.target.value }));
  };
  const handlePassword = (e) =>
    setUser((prevState) => ({ ...prevState, password: e.target.value }));

  const handleKeyLogin = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleKeyUserName = (e) => {
    if (e.key === "Enter") {
      dispatch(authPassword(username));
    }
  };

  return (
    <>
      {message.length > 1 && (
        <div
          className='alert alert-info w-50 position-fixed top-0 start-50 text-center'
          role='alert'>
          {message}
        </div>
      )}
      <div className='login__page p-3'>
        <div className='login__box__form'>
          <div className='d-flex flex-row'>
            <img src={logo} alt='logo' style={{ width: "50px" }} />
            <h1 className='ms-2'>Express 100k</h1>
          </div>

          <div className='login__form'>
            {!loginStep ? (
              <div>
                <h6>Telefon raqam</h6>
                <input
                  className='login__input'
                  onChange={handleUsername}
                  value={username}
                  onKeyPress={handleKeyUserName}
                />
                <button
                  className='btn btn-info w-100'
                  disabled={loading}
                  onClick={() => dispatch(authPassword(username))}>
                  <SiGnuprivacyguard /> Tizimga kirish
                </button>
              </div>
            ) : (
              <div>
                <h6>Telefon raqam</h6>
                <input
                  className='login__input'
                  defaultValue={username}
                  disabled={true}
                />
                <h6>Sms-kod</h6>
                <input
                  className='login__input'
                  type='tel'
                  onChange={handlePassword}
                  value={password}
                  onKeyPress={handleKeyLogin}
                />
                <button
                  className='btn btn-info w-100'
                  disabled={loading}
                  onClick={handleLogin}>
                  <SiGnuprivacyguard /> Tizimga kirish
                </button>
              </div>
            )}
          </div>
        </div>
        {/* {message && <Alert message={message} />} */}
      </div>
    </>
  );
};

export default Login;
