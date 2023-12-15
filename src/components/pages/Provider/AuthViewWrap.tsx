import { useSelector } from 'react-redux';
import { ProviderAuthState } from '../../../redux/slices/ProviderAuthSlice';
import { Store } from '../../../redux/store';
import { Navigate } from 'react-router-dom';
import { FC, PropsWithChildren } from 'react';

const AuthViewWrap: FC<PropsWithChildren> = ({ children }) => {
  const { token, email } = useSelector<Store, ProviderAuthState>((state) => state.providerAuth);
  return token == null ? <Navigate to="/provider/login" /> : <>{children}</>;
};

export default AuthViewWrap;
