import { useSelector } from 'react-redux';
import { RequestsSliceState } from '../../../../../redux/slices/RequestsSlice';
import { Store } from '../../../../../redux/store';
import ColumnProvider from '../../Common/ColumnProvider';
import RequestCard from '../../Common/RequestCard';
import { useEffect, useState } from 'react';
import RequestType from '../../../../../types/Request';
import ActiveRequestView from './ActiveRequestView';
import { useLocation } from 'react-router-dom';
import Loading from '../../../../common/Loading';
import DoubleColumnWrapper from '../../../../containers/DoubleColumnWrapper';

const ProviderRequests = () => {
  const { assignedRequests, loading: requestLoading } = useSelector<Store, RequestsSliceState>(
    (state) => state.requests
  );
  const [activeRequest, setActiveRequest] = useState<RequestType | null>(null);
  const handleFocus = (id: string) => {
    setActiveRequest(assignedRequests.find((request) => request.id === id)!);
  };
  const { state } = useLocation();
  useEffect(() => {
    if (state) {
      setActiveRequest(assignedRequests.find((request) => request.id === state.activeReqId)!);
    }
  }, [state, assignedRequests]);

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

      <ColumnProvider title="Edition:">
        <ActiveRequestView request={activeRequest} />
      </ColumnProvider>
    </DoubleColumnWrapper>
  );
};

export default ProviderRequests;
