import React from "react";
import ReactDOM from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css';
import App from "./App";
import { Provider } from "react-redux";
import Context from "./Context/Context";
import { store } from "./redux/store";
import "./index.css"
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Context>
      <App />
    </Context>
  </Provider>
);
