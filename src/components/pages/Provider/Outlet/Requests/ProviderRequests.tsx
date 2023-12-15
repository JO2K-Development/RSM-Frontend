import { useSelector } from 'react-redux';
import { RequestsSliceState } from '../../../../../redux/slices/RequestsSlice';
import { Store } from '../../../../../redux/store';
import ColumnProvider from '../../Main/ColumnProvider';
import RequestCard from '../../RequestCard';
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
              key={index}
              request={request}
              handleButton={handleFocus}
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
