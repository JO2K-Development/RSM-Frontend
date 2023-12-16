import { FC } from 'react';
import RequestType from '../../../../../types/Request';
import useStatusDate from '../../../../../hooks/useStatusDate';
import updateRequest from '../../../../../api/updateRequestStatus';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, Store } from '../../../../../redux/store';
import { ProviderAuthState } from '../../../../../redux/slices/ProviderAuthSlice';
import { getRequests } from '../../../../../redux/slices/RequestsSlice';
import { requestStatusMap } from '../../../../../types/RequestStatusEnum';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
interface StatusEditorProps {
  request: RequestType | null;
}
function formatDateToString(date: Date | null) {
  if (!date) return null;
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to month and pad with zero if needed
  const day = date.getDate().toString().padStart(2, '0'); // Pad with zero if needed

  return `${year}-${month}-${day}`;
}
const StatusEditor: FC<StatusEditorProps> = ({ request }) => {
  const { token, email } = useSelector<Store, ProviderAuthState>((state) => state.providerAuth);
  const dispatch = useDispatch<AppDispatch>();
  const updateReq = () => {
    updateRequest(token!, request?.id!, {
      requestStatus: request?.requestStatus,
      pickupDate: formatDateToString(pickupDate),
      deliveryDate: formatDateToString(deliveryDate)
    }).then((arg) => dispatch(getRequests({ token: token!, email })));
  };
  const { pickupDate, deliveryDate, setDeliveryDate, setPickupDate } = useStatusDate(request);
  return (
    request && (
      <div className=" flex flex-col">
        {request.requestStatus && requestStatusMap[request.requestStatus]}
        <div className="text-black">
          <DatePicker
            dateFormat="dd-MM-yyyy"
            selected={pickupDate}
            onChange={(date: Date) => setPickupDate(date)}
          />
          <div />
          <DatePicker
            dateFormat="dd-MM-yyyy"
            selected={deliveryDate}
            onChange={(date: Date) => setDeliveryDate(date)}
          />
        </div>{' '}
        <button
          onClick={() => {
            updateReq();
          }}
        >
          UPPPDATE
        </button>
      </div>
    )
  );
};

export default StatusEditor;
