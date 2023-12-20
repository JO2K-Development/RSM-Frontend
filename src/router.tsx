import { Navigate, createBrowserRouter } from 'react-router-dom';
import LandingPage from './components/pages/Home/LandingPage';
import RequestPage from './components/pages/Request/RequestPage';
import LoginPage from './components/pages/Provider/LoginPage';
import ProviderMainPage from './components/pages/Provider/ProviderMainPage';
import ProviderStatsPage from './components/pages/Provider/ProviderStatsPage';
import ProviderAccountPage from './components/pages/Provider/ProviderAccoutPage';
import ProviderRequestsPage from './components/pages/Provider/ProviderRequestsPage';
import PostSendLobbyPage from './components/pages/Request/PostSendLobbyPage';
import AdminMainPage from './components/pages/Admin/AdminMainPage';

const router = createBrowserRouter([
  { path: '/admin', element: <AdminMainPage /> },
  { path: '/home', element: <LandingPage /> },
  { path: '/request', element: <RequestPage /> },
  { path: 'request/sent', element: <PostSendLobbyPage /> },
  {
    path: '/provider/:id',
    element: <ProviderMainPage />,
    children: [
      { path: '/provider/:id/statistics', element: <ProviderStatsPage /> },
      { path: '/provider/:id/account', element: <ProviderAccountPage /> },
      { path: '/provider/:id/your-requests', element: <ProviderRequestsPage /> }
    ]
  },
  { path: '/provider/login', element: <LoginPage /> },
  { path: '/*', element: <Navigate to="/home" /> }
]);

export default router;
