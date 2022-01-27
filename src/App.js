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
import ProfilePage from "./pages/user/ProfilePage";
import EditDeliveryPage from "./pages/delivery/EditDeliveryPage";
import PackagesListPage from "./pages/packages-list-page/PackagesListPage";
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
                <Route path='/package' element={<Delivery />} />
                <Route
                  path='/package/create-package'
                  element={<CreateDeliveryPage />}
                />
                <Route
                  path='/package/edit-package/:id'
                  element={<EditDeliveryPage />}
                />

                <Route path='/' element={<ProfilePage />} />
                <Route path='/settings' element={<SettingsPage />} />

                <Route path='/packages-list' element={<PackagesListPage />} />
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
