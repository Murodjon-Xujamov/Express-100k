import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import ReduxToastr from "react-redux-toastr";

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position='top-right'
        getState={(state) => state.toastr} // This is the default
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar
        closeOnToastrClick
      />
    </div>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
