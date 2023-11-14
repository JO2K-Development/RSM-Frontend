import { Navigate, createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import ProviderMainPage from "./components/pages/Provider/ProviderMainPage";
import RequestPage from "./components/pages/Client/Request/RequestPage";

const router=createBrowserRouter([
    { path: "/home", element: <LandingPage /> },
    { path: "/request", element: <RequestPage /> },
    { path: "/provider", element: <ProviderMainPage /> },
    {path: "/*", element: <Navigate to="/home" />}
  ]);
  
export default router;