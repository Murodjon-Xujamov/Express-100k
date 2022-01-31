import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./container/Navbar";
import Sedibar from "./container/Sedibar";
import Login from "./pages/login/Login";

import "./assets/scss/_main.scss";

import { AppRoutes } from "./routes";
const token = window.localStorage.getItem("@token");

const App = () => {
  return token ? (
    <div>
      <React.Suspense fallback={false}>
        <Navbar />
        <div className='main__content'>
          <Sedibar />
          <div className='content__page'>
            <AppRoutes />
          </div>
        </div>
      </React.Suspense>
    </div>
  ) : (
    <Login />
  );
};

export default App;
