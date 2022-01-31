import React, { useEffect, useState } from "react";
import "../../assets/scss/_login.scss";
import { SiGnuprivacyguard } from "react-icons/si";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authLogin, authPassword } from "../../redux/actions/userActions";
import { Route } from "react-router-dom";
import Delivery from "../delivery/Delivery";
import ButtonLoading from "../../component/loading/ButtonLoading";

const Login = () => {
  const [{ username, password }, setUser] = useState({
    username: "+998 ",
    password: "",
  });

  const { loginStep, loading, token, message } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== null) {
      <Route path='/profile' element={<Delivery />} />;
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
      <div className='login__page'>
        <div className='login__box__form'>
          <h1>Express</h1>
          <h3>Kirish</h3>
          <div className='login__form'>
            {!loginStep ? (
              <div>
                Telifon raqam
                <input
                  className='login__input'
                  onChange={handleUsername}
                  value={username}
                  onKeyPress={handleKeyUserName}
                />
                <button
                  className='login__button'
                  disabled={loading}
                  onClick={() => dispatch(authPassword(username))}>
                  {loading ? <ButtonLoading /> : <SiGnuprivacyguard />} Tizimga
                  kirish
                </button>
              </div>
            ) : (
              <div>
                Telifon raqam
                <input
                  className='login__input'
                  defaultValue={username}
                  disabled={true}
                />
                Sms-kod
                <input
                  className='login__input'
                  type='tel'
                  onChange={handlePassword}
                  value={password}
                  onKeyPress={handleKeyLogin}
                />
                <button
                  className='login__button'
                  disabled={loading}
                  onClick={handleLogin}>
                  {loading ? <ButtonLoading /> : <SiGnuprivacyguard />} Tizimga
                  kirish
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
