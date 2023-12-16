import { FC, useState } from 'react';
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
import Button from './Button';

interface StatusEditorProps {
  request: RequestType | null;
}

const StatusEditor: FC<StatusEditorProps> = ({ request }) => {
  const { token, email } = useSelector<Store, ProviderAuthState>((state) => state.providerAuth);
  const dispatch = useDispatch<AppDispatch>();
  const updateReq = (nextStat: boolean) => {
    const nextReq = nextStat ? getNextStatus(request?.requestStatus) : request?.requestStatus;
    console.log(nextReq);
    updateRequest(token!, request?.id!, {
      requestStatus: nextReq,
      pickupDate: formatDateToString(pickupDate),
      deliveryDate: formatDateToString(deliveryDate)
    }).then((arg) => dispatch(getRequests({ token: token!, email })));
  };
  const { pickupDate, deliveryDate, setDeliveryDate, setPickupDate } = useCalendar(request);
  const [edit, setEdit] = useState(false);
  return (
    request && (
      <>
        {request.requestStatus}
        {request.requestStatus == RequestStatusEnum.WAITING_FOR_AN_EMAIL_VERIFICATION ? (
          <div>
            {RequestStatusEnum.WAITING_FOR_AN_EMAIL_VERIFICATION}

            <Button
              color="red"
              disabled={false}
              onClick={() => {
                updateReq(true);
              }}
            >
              go next
            </Button>
          </div>
        ) : request.requestStatus == RequestStatusEnum.WAITING_FOR_A_MECHANIC_ASSIGNMENT ? (
          <div>
            <CalendarPick
              title={'Pickup date'}
              current={pickupDate}
              onChange={(date: Date) => setPickupDate(date)}
            />
            <Button
              color="red"
              disabled={pickupDate == null}
              onClick={() => {
                updateReq(true);
              }}
            >
              go next
            </Button>
          </div>
        ) : request.requestStatus == RequestStatusEnum.WAITING_FOR_A_CAR ? (
          <div>
            <CalendarPick
              disabled={!edit}
              title={'Pickup date'}
              current={pickupDate}
              onChange={(date: Date) => setPickupDate(date)}
            />
            <Button
              color="green"
              onClick={() => {
                edit && updateReq(false);
                setEdit(!edit);
              }}
            >
              {edit ? 'save' : 'edit the date'}
            </Button>
            <Button
              color="red"
              disabled={pickupDate == null || edit}
              onClick={() => {
                updateReq(true);
              }}
            >
              CAR DELIVERED
            </Button>
          </div>
        ) : request.requestStatus == RequestStatusEnum.CAR_DIAGNOSIS ? (
          <div>
            <CalendarPick
              disabled={true}
              title={'Pickup date'}
              current={pickupDate}
              onChange={(date: Date) => setPickupDate(date)}
            />
            diagnosis field
            <br />
            <Button
              color="red"
              onClick={() => {
                updateReq(true);
              }}
            >
              Place diagnosis
            </Button>
          </div>
        ) : request.requestStatus == RequestStatusEnum.IN_REPAIR ? (
          <div>
            {' '}
            <CalendarPick
              disabled={true}
              title={'Pickup date'}
              current={pickupDate}
              onChange={(date: Date) => setPickupDate(date)}
            />
            <CalendarPick
              disabled={!edit}
              title={'delivery date'}
              current={deliveryDate}
              onChange={(date: Date) => setDeliveryDate(date)}
            />
            <Button
              color="green"
              onClick={() => {
                edit && updateReq(false);
                setEdit(!edit);
              }}
            >
              {edit ? 'save' : 'edit the date'}
            </Button>
            <Button
              color="red"
              disabled={deliveryDate == null || edit}
              onClick={() => {
                updateReq(true);
              }}
            >
              Ready to go
            </Button>
          </div>
        ) : request.requestStatus == RequestStatusEnum.READY_TO_GO ? (
          <div>
            <Button
              color="red"
              onClick={() => {
                updateReq(true);
              }}
            >
              Done{' '}
            </Button>
          </div>
        ) : (
          <></>
        )}
      </>
    )
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
