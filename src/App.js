import React from "react";
import Navbar from "./component/main-comp/navbar";
import Sidebar from "./component/main-comp/sidebar";
import Login from "./pages/login/login";
import "./assets/scss/main.scss";
import { AppRoutes } from "./routes";

const token = window.localStorage.getItem("@token");

const App = () => {
  return token ? (
    <div>
      <React.Suspense fallback={false}>
        <Navbar />
        <div className='main__content'>
          <Sidebar />
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
