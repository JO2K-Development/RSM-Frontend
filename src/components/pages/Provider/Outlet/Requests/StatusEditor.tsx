import { FC } from 'react';
import RequestType from '../../../../../types/Request';
import useCalendar from '../../../../../hooks/useCalendar';
import updateRequest from '../../../../../api/updateRequestStatus';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, Store } from '../../../../../redux/store';
import { ProviderAuthState } from '../../../../../redux/slices/ProviderAuthSlice';
import { getRequests } from '../../../../../redux/slices/RequestsSlice';
import RequestStatusEnum, { requestStatusMap } from '../../../../../types/RequestStatusEnum';
import CalendarPick from './CalendarPick';
import { formatDateToString } from '../../../../../utils/dateFormatters';
import { getNextStatus } from '../../../../../utils/statusHandlers';

interface StatusEditorProps {
  request: RequestType | null;
}

const StatusEditor: FC<StatusEditorProps> = ({ request }) => {
  const { token, email } = useSelector<Store, ProviderAuthState>((state) => state.providerAuth);
  const dispatch = useDispatch<AppDispatch>();
  const updateReq = (nextStat: boolean) => {
    updateRequest(token!, request?.id!, {
      requestStatus: nextStat ? getNextStatus(request?.requestStatus) : request?.requestStatus,
      pickupDate: formatDateToString(pickupDate),
      deliveryDate: formatDateToString(deliveryDate)
    }).then((arg) => dispatch(getRequests({ token: token!, email })));
  };
  const { pickupDate, deliveryDate, setDeliveryDate, setPickupDate } = useCalendar(request);

  return (
    request &&
    (request.requestStatus == RequestStatusEnum.WAITING_FOR_AN_EMAIL_VERIFICATION ? (
      <div>
        {RequestStatusEnum.WAITING_FOR_AN_EMAIL_VERIFICATION}

        <button
          onClick={() => {
            updateReq(true);
          }}
        >
          butt
        </button>
      </div>
    ) : request.requestStatus == RequestStatusEnum.WAITING_FOR_A_MECHANIC_ASSIGNMENT ? (
      <div>{RequestStatusEnum.WAITING_FOR_A_MECHANIC_ASSIGNMENT}</div>
    ) : request.requestStatus == RequestStatusEnum.WAITING_FOR_A_CAR ? (
      <div>{RequestStatusEnum.WAITING_FOR_A_CAR}</div>
    ) : request.requestStatus == RequestStatusEnum.CAR_DIAGNOSIS ? (
      <div>{RequestStatusEnum.CAR_DIAGNOSIS}</div>
    ) : request.requestStatus == RequestStatusEnum.IN_REPAIR ? (
      <div>{RequestStatusEnum.IN_REPAIR}</div>
    ) : request.requestStatus == RequestStatusEnum.READY_TO_GO ? (
      <div>{RequestStatusEnum.READY_TO_GO}</div>
    ) : (
      <></>
    ))
  );

  // request && (
  //   <div className=" flex flex-col justify-center mx-auto gap-[0.5rem] text-center w-[80%]">
  //     <div>{request.requestStatus && requestStatusMap[request.requestStatus]}</div>

  //     <CalendarPick
  //       title={'Delivery date'}
  //       current={deliveryDate}
  //       onChange={(date: Date) => setDeliveryDate(date)}
  //     />
  //     <CalendarPick
  //       title={'Pickup date'}
  //       current={pickupDate}
  //       onChange={(date: Date) => setPickupDate(date)}
  //     />
  //     <button
  //       onClick={() => {
  //         updateReq();
  //       }}
  //     >
  //       UPPPDATE
  //     </button>
  //   </div>
  // )
};

export default StatusEditor;
