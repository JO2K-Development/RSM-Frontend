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
  const updateReq = (nextStat: boolean) => {
    updateRequest(token!, request?.id!, {
      requestStatus: nextStat ? getNextStatus(request?.requestStatus) : request?.requestStatus,
      pickupDate: formatDateToString(pickupDate),
      deliveryDate: formatDateToString(deliveryDate)
    }).then((arg) => dispatch(getRequests({ token: token!, email })));
  };
  const { pickupDate, deliveryDate, setDeliveryDate, setPickupDate } = useCalendar(request);

  function getNextStatus(currentStatus: RequestStatusEnum | undefined): RequestStatusEnum | null {
    if (!currentStatus) return null;
    const statusOrder: RequestStatusEnum[] = [
      RequestStatusEnum.WAITING_FOR_AN_EMAIL_VERIFICATION,
      RequestStatusEnum.WAITING_FOR_A_MECHANIC_ASSIGNMENT,
      RequestStatusEnum.WAITING_FOR_A_CAR,
      RequestStatusEnum.CAR_DIAGNOSIS,
      RequestStatusEnum.IN_REPAIR,
      RequestStatusEnum.READY_TO_GO,
      RequestStatusEnum.DONE
    ];

    const currentIndex = statusOrder.indexOf(currentStatus);
    if (currentIndex === -1 || currentIndex === statusOrder.length - 1) {
      return null; // Return null if current status is not found or it is the last status
    }

    return statusOrder[currentIndex + 1];
  }

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
