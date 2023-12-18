import { useDispatch, useSelector } from 'react-redux';
import { ProviderAuthState } from '../../../../redux/slices/ProviderAuthSlice';
import { AppDispatch, Store } from '../../../../redux/store';
import { Navigate } from 'react-router-dom';
import { FC, PropsWithChildren, useEffect } from 'react';
import { clearState as clearProvInfoSlice } from '../../../../redux/slices/ProviderInfoSlice';
import { clearState as clearRequestSlice } from '../../../../redux/slices/RequestsSlice';

const AuthViewWrap: FC<PropsWithChildren> = ({ children }) => {
  const { token, email } = useSelector<Store, ProviderAuthState>((state) => state.providerAuth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (token == null) dispatch(clearProvInfoSlice());
    dispatch(clearRequestSlice());
  }, [token, dispatch]);

  return token == null ? <Navigate to="/provider/login" /> : <>{children}</>;
};

export default AuthViewWrap;
