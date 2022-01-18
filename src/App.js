import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./container/Navbar";
import Sedibar from "./container/Sedibar";
import Delivery from "./pages/delivery/Delivery";
import DeliveryList from "./pages/delivery/DeliveryList";
import "./assets/scss/_main.scss";
import Login from "./pages/login/Login";
import CreateDeliveryPage from "./pages/delivery/CreateDeliveryPage";
import SettingsPage from "./pages/user/SettingsPage";
const token = window.localStorage.getItem("@token");

const App = () => {
  return (
    <BrowserRouter>
      {token ? (
        <div>
          <Navbar />
          <div className='main__content'>
            <Sedibar />
            <div className='content__page'>
              <Routes>
                <Route path='/' element={<Delivery />} />
                <Route path='/delivery' element={<DeliveryList />} />
                <Route
                  path='/create-delivery'
                  element={<CreateDeliveryPage />}
                />
                <Route path='/settings' element={<SettingsPage />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </BrowserRouter>
  );
};

export default App;
