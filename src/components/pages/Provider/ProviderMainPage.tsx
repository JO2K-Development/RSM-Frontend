import { useDispatch, useSelector } from 'react-redux';
import { ProviderAuthState, logout } from '../../../redux/slices/ProviderAuthSlice';
import { AppDispatch, Store } from '../../../redux/store';
import { Navigate, Outlet, useNavigate, useOutlet, useParams } from 'react-router-dom';
import ProviderHeader from './Main/ProviderHeader';
import RequestCard from './Common/RequestCard';
import ColumnProvider from './Common/ColumnProvider';
import ProviderNavbar from './Common/ProviderNavbar';
import { ProviderInfoState, getProviderInfo } from '../../../redux/slices/ProviderInfoSlice';
import { useEffect, useRef, useState } from 'react';
import { RequestsSliceState } from '../../../redux/slices/RequestsSlice';
import pairRequest from '../../../api/pairRequest';
import Loading from '../../common/Loading';
import DoubleColumnWrapper from '../../containers/DoubleColumnWrapper';
import AuthViewWrap from './Common/AuthViewWrap';
import { useWindowSize } from 'usehooks-ts';
import ProviderModal from './Common/ProviderModal';
import PageLayout from '../../containers/PageLayout';

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
  const { width, height } = useWindowSize();
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

  let { id } = useParams();
  const outlet = useOutlet();

  return (
    <AuthViewWrap>
      <ProviderNavbar />
      <PageLayout className="provider-page-bg flex flex-col    ">
        <Outlet />
        {!outlet && (
          <>
            <ProviderHeader
              provider={ProviderInfo}
              loading={providerLoading}
            />
            <DoubleColumnWrapper>
              {width >= 1024 ? (
                <ColumnProvider title={'Your pending requests!'}>
                  {requestLoading ? (
                    <Loading />
                  ) : (
                    assignedRequests.map((request, index) => (
                      <RequestCard
                        buttonText="show details"
                        key={index}
                        request={request}
                        handleButton={handleEdit}
                      />
                    ))
                  )}
                </ColumnProvider>
              ) : (
                <></>
              )}
              <ColumnProvider title={'Requests that you might want!'}>
                {requestLoading ? (
                  <Loading />
                ) : (
                  unassignedRequests.map((request, index) => (
                    <RequestCard
                      buttonText="Take it!"
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
      </PageLayout>
    </AuthViewWrap>
  );
};

export default ProviderMainPage;
