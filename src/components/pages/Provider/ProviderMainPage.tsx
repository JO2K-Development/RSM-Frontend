import { useDispatch, useSelector } from 'react-redux';
import { ProviderAuthState, logout } from '../../../redux/slices/ProviderAuthSlice';
import { AppDispatch, Store } from '../../../redux/store';
import { Navigate, Outlet, useNavigate, useOutlet, useParams } from 'react-router-dom';
import ProviderHeader from './Main/ProviderHeader';
import RequestCard from './RequestCard';
import ColumnProvider from './Main/ColumnProvider';
import Navbar from './Navbar';
import { ProviderInfoState, getProviderInfo } from '../../../redux/slices/ProviderInfoSlice';
import { useEffect, useState } from 'react';
import { RequestsSliceState } from '../../../redux/slices/RequestsSlice';
import pairRequest from '../../../api/pairRequest';
import Loading from '../../common/Loading';
import DoubleColumnWrapper from '../../containers/DoubleColumnWrapper';

const ProviderMainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { token, email } = useSelector<Store, ProviderAuthState>((state) => state.providerAuth);
  const { ProviderInfo, loading: providerLoading } = useSelector<Store, ProviderInfoState>(
    (state) => state.providerInfo
  );
  const {
    unassignedRequests,
    assignedRequests,
    loading: requestLoading
  } = useSelector<Store, RequestsSliceState>((state) => state.requests);

  useEffect(() => {
    dispatch(getProviderInfo({ email: email, token: token != null ? token : '' }));
  }, []);

  const navigate = useNavigate();

  const handlePair = (id: string) => {
    pairRequest(token!, ProviderInfo?.id!, id).then(() => {
      dispatch(getProviderInfo({ email: email, token: token != null ? token : '' }));
    });
  };
  const handleEdit = (id: string) => {
    navigate(`/provider/${token}/your-requests`, {
      state: { activeReqId: id }
    });
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  let { id } = useParams();
  const outlet = useOutlet();
  return token == null || id != token ? (
    <Navigate to="/provider/login" />
  ) : (
    <div className="provider-page-bg  flex h-screen max-h-screen overflow-hidden  flex-col">
      <Navbar />
      <div className=" bg-neutral-900/60 lg:h-screen flex flex-grow flex-col ">
        <Outlet />
        {!outlet && (
          <>
            <ProviderHeader
              provider={ProviderInfo}
              loading={providerLoading}
            />
            <DoubleColumnWrapper>
              <ColumnProvider title={'Your pending requests!'}>
                {requestLoading ? (
                  <Loading />
                ) : (
                  assignedRequests.map((request, index) => (
                    <RequestCard
                      key={index}
                      request={request}
                      handleButton={handleEdit}
                    />
                  ))
                )}
              </ColumnProvider>

              <ColumnProvider title={'The  requests that need to be taken care of!'}>
                {requestLoading ? (
                  <Loading />
                ) : (
                  unassignedRequests.map((request, index) => (
                    <RequestCard
                      key={index}
                      handleButton={handlePair}
                      request={request}
                    />
                  ))
                )}
              </ColumnProvider>
            </DoubleColumnWrapper>
          </>
        )}
      </div>
    </div>
  );
};

export default ProviderMainPage;
