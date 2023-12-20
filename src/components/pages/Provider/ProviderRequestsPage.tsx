import { useSelector } from 'react-redux';
import { RequestsSliceState } from '../../../redux/slices/RequestsSlice';
import { Store } from '../../../redux/store';
import ColumnProvider from './Common/ColumnProvider';
import RequestCard from './Common/Requests/RequestCard';
import { useEffect, useState } from 'react';
import RequestWithBackend from '../../../types/Request';
import ActiveRequestView from './Common/Requests/ActiveRequestView';
import { useLocation } from 'react-router-dom';
import Loading from '../../common/Loading';
import DoubleColumnWrapper from '../../containers/DoubleColumnWrapper';
import { useWindowSize } from 'usehooks-ts';
import { useProviderModal } from '../../../hooks/useProviderModal';

const ProviderRequestsPage = () => {
  const { assignedRequests, loading: requestLoading } = useSelector<Store, RequestsSliceState>(
    (state) => state.requests
  );
  const [activeRequest, setActiveRequest] = useState<RequestWithBackend | null>(null);
  const handleFocus = (id: string | null) => {
    if (id == null) {
      setActiveRequest(null);
      setIsModal(false);
      return;
    }

    if (width < 1024) setIsModal(true);
    setActiveRequest(assignedRequests.find((request) => request.id === id)!);
  };
  const { isModal, setIsModal, modal } = useProviderModal(
    <div
      className="flex    h-full  py-[2rem] "
      onClick={() => {
        handleFocus(null);
      }}
    >
      <ColumnProvider title="Edition:">
        <ActiveRequestView request={activeRequest} />
      </ColumnProvider>
    </div>
  );
  const { state } = useLocation();
  useEffect(() => {
    if (state) {
      setActiveRequest(assignedRequests.find((request) => request.id === state.activeReqId)!);
    }
  }, []);
  useEffect(() => {
    // console.log("ess",assignedRequests.find((request) => request.id == activeRequest?.id))
    if (activeRequest) {
      if (assignedRequests.find((request) => request.id == activeRequest.id) != null)
        setActiveRequest(assignedRequests.find((request) => request.id === activeRequest.id)!);
      else {
        setActiveRequest(null);
      }
    }
  }, [state, assignedRequests]);

  const { width } = useWindowSize();

  return (
    <DoubleColumnWrapper>
      <ColumnProvider title={'Your pending requests!'}>
        {requestLoading ? (
          <Loading />
        ) : (
          assignedRequests.map((request, index) => (
            <RequestCard
              handleCard={() => {
                handleFocus(request.id!);
              }}
              active={request.id === activeRequest?.id}
              key={index}
              request={{ ...request, message: '' }}
            />
          ))
        )}
      </ColumnProvider>

      {width >= 1024 ? (
        <ColumnProvider title="Edition:">
          <ActiveRequestView request={activeRequest} />
        </ColumnProvider>
      ) : (
        modal
      )}
    </DoubleColumnWrapper>
  );
};

export default ProviderRequestsPage;
