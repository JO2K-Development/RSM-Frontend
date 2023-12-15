import { Navigate, createBrowserRouter } from 'react-router-dom';
import LandingPage from './components/pages/Home/LandingPage';
import RequestPage from './components/pages/Request/RequestPage';
import LoginPage from './components/pages/Provider/LoginPage';
import ProviderMainPage from './components/pages/Provider/ProviderMainPage';
import ProviderStats from './components/pages/Provider/Outlet/Stats/ProviderStats';
import ProviderAccount from './components/pages/Provider/Outlet/Account/ProviderAccout';
import ProviderRequests from './components/pages/Provider/Outlet/Requests/ProviderRequests';
import PostSendLobbyPage from './components/pages/Request/PostSendLobbyPage';

const router = createBrowserRouter([
  { path: '/home', element: <LandingPage /> },
  { path: '/request', element: <RequestPage /> },
  { path: 'request/sent', element: <PostSendLobbyPage /> },
  {
    path: '/provider/:id',
    element: <ProviderMainPage />,
    children: [
      { path: '/provider/:id/statistics', element: <ProviderStats /> },
      { path: '/provider/:id/account', element: <ProviderAccount /> },
      { path: '/provider/:id/your-requests', element: <ProviderRequests /> }
    ]
  },
  { path: '/provider/login', element: <LoginPage /> },
  { path: '/*', element: <Navigate to="/home" /> }
]);

export default router;
