import { Navigate, createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/pages/Home/LandingPage";
import RequestPage from "./components/pages/Request/RequestPage";
import LoginPage from "./components/pages/Provider/LoginPage";
import SecuredMainPage from "./components/pages/Provider/ProviderMain";

const router = createBrowserRouter([
  { path: "/home", element: <LandingPage /> },
  { path: "/request", element: <RequestPage /> },
  { path: "/provider/:id", element: <SecuredMainPage /> },
  { path: "/provider/login", element: <LoginPage /> },
  { path: "/*", element: <Navigate to="/home" /> },
]);

export default router;
