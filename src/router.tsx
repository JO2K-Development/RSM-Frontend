import { Navigate, createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import ProviderSwitcher from "./components/pages/Provider/ProviderSwitcher";
import RequestPage from "./components/pages/Request/RequestPage";
import LoginPage from "./components/pages/Provider/LoginPage";
import SecuredMainPage from "./components/pages/Provider/SecuredMainPage";

const router=createBrowserRouter([
    { path: "/home", element: <LandingPage /> },
    { path: "/request", element: <RequestPage /> 
  },
    { path: "/provider", element: <ProviderSwitcher /> , children: [ {path:":id",element:<SecuredMainPage/>},
    {path:"login",element:<LoginPage/>},]},
   
    {path:"/*",element:<Navigate to='/home'/>},
   
  ]);
  
export default router;