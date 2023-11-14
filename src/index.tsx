import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import {RouterProvider} from "react-router-dom";
import router from "./router";
import MainLayout from "./components/containers/MainLayout";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </Provider>
  </React.StrictMode>
);
