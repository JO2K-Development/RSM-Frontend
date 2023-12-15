import { FC, useEffect, useRef, useState } from 'react';
import RequestType from '../../../../../types/Request';
import Accordion from './Accordion';
import ProviderField from '../../Common/ProviderField';
import RequestStatus, { requestStatusMap } from '../../../../../types/RequestStatusEnum';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { ProviderAuthState } from '../../../../../redux/slices/ProviderAuthSlice';
import { AppDispatch, Store } from '../../../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import updateRequest from '../../../../../api/updateRequestStatus';
import { getRequests } from '../../../../../redux/slices/RequestsSlice';
interface ActiveRequestViewProps {
  request: RequestType | null;
}
function formatDateToString(date: Date | null) {
  if (!date) return null;
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to month and pad with zero if needed
  const day = date.getDate().toString().padStart(2, '0'); // Pad with zero if needed

  return `${year}-${month}-${day}`;
}

const ActiveRequestView: FC<ActiveRequestViewProps> = ({ request }) => {
  const [pickupDate, setPickupDate] = useState(new Date());
  const { token, email } = useSelector<Store, ProviderAuthState>((state) => state.providerAuth);
  console.log(new Date(request?.pickupDate!), new Date(request?.deliveryDate!));
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const dispatch = useDispatch<AppDispatch>();
  const updateReq = () => {
    updateRequest(token!, request?.id!, {
      requestStatus: request?.requestStatus,
      pickupDate: formatDateToString(pickupDate),
      deliveryDate: formatDateToString(deliveryDate)
    }).then((arg) => dispatch(getRequests({ token: token!, email })));
  };

  useEffect(() => {
    console.log(request?.pickupDate, request?.deliveryDate);
    if (request?.deliveryDate) setDeliveryDate(new Date(request?.deliveryDate));
    if (request?.pickupDate) setPickupDate(new Date(request?.pickupDate));
  }, [request]);

  // console.log(formatDateToString(pickupDate), formatDateToString(deliveryDate));
  return (
    request && (
      <div className="flex flex-col  gap-[1rem] ">
        <Accordion title={'Client'}>
          <div className="grid grid-cols-2">
            <ProviderField
              text={'First Name:'}
              value={request.creator?.firstName}
            />
            <ProviderField
              text={'Last Name:'}
              value={request.creator?.lastName}
            />
            <ProviderField
              text={'Phone Number:'}
              value={request.creator?.phoneNumber}
            />
            <ProviderField
              text={'Email:'}
              value={request.creator?.email}
            />
          </div>
        </Accordion>
        <Accordion title={'Assignement details'}>
          <div className="grid grid-cols-2">
            <ProviderField
              text={'Car make:'}
              value={request.carMake}
            />
            <ProviderField
              text={'Car year:'}
              value={request.carYear?.toString()}
            />
            <ProviderField
              text={'Car make:'}
              value={request.carMake}
            />
            <ProviderField
              text={'Car model:'}
              value={request.carModel}
            />
          </div>
          <div className="">{request.message}</div>
        </Accordion>
        <Accordion title={'Assignment Edition'}>
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
        </Accordion>
      </div>
    )
  );
};

export default ActiveRequestView;
