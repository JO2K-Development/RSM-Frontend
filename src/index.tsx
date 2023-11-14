import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import RequestPage from "./components/pages/Client/RequestPage";
import ProviderMainPage from "./components/pages/Provider/ProviderMainPage";

const router = createBrowserRouter([
  { path: "/home", element: <LandingPage /> },
  { path: "/request", element: <RequestPage /> },
  { path: "/provider", element: <ProviderMainPage /> },
  {path: "/*", element: <Navigate to="/home" />}
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
