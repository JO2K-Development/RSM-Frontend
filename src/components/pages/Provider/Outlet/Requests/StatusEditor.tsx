import { FC, useEffect, useState } from 'react';
import RequestType from '../../../../../types/Request';
import useCalendar from '../../../../../hooks/useCalendar';
import updateRequest from '../../../../../api/updateRequestStatus';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, Store } from '../../../../../redux/store';
import { ProviderAuthState } from '../../../../../redux/slices/ProviderAuthSlice';
import { getRequests } from '../../../../../redux/slices/RequestsSlice';
import RequestStatusEnum, {
  getStatusText,
  requestStatusMap
} from '../../../../../types/RequestStatusEnum';
import CalendarPick from './CalendarPick';
import { formatDateToString } from '../../../../../utils/dateFormatters';
import { getNextStatus } from '../../../../../utils/statusHandlers';
import Button from './Button';
import StatusEditContainer from './StatusEditContainer';

interface StatusEditorProps {
  request: RequestType | null;
}

const StatusEditor: FC<StatusEditorProps> = ({ request }) => {
  const { token, email } = useSelector<Store, ProviderAuthState>((state) => state.providerAuth);

  const dispatch = useDispatch<AppDispatch>();
  const updateReq = (nextStat: boolean) => {
    console.log(text, 'tutaj');
    const nextReq = nextStat ? getNextStatus(request?.requestStatus) : request?.requestStatus;
    updateRequest(token!, request?.id!, {
      requestStatus: nextReq,
      pickupDate: formatDateToString(pickupDate),
      deliveryDate: formatDateToString(deliveryDate),
      diagnosis: text
    }).then((arg) => dispatch(getRequests({ token: token!, email })));
  };
  const active = 'rgb(239 68 68 / 0.4)';
  const second = 'rgb(239 208 68 / 0.4)';
  const { pickupDate, deliveryDate, setDeliveryDate, setPickupDate } = useCalendar(request);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    request?.diagnosis ? setText(request?.diagnosis) : setText('');
  }, [request]);
  return (
    request && (
      <div className="flex flex-col gap-[0.5rem] text-center  text-base">
        <div>{getStatusText(request.requestStatus)}</div>
        {request.requestStatus == RequestStatusEnum.WAITING_FOR_DATE_ASSIGNMENT ? (
          <StatusEditContainer
            buttons={
              <Button
                color={active}
                disabled={pickupDate == null}
                onClick={() => {
                  updateReq(true);
                }}
              >
                go next
              </Button>
            }
          >
            <CalendarPick
              title={'Pickup date:'}
              current={pickupDate}
              onChange={(date: Date) => setPickupDate(date)}
            />
          </StatusEditContainer>
        ) : request.requestStatus == RequestStatusEnum.WAITING_FOR_A_CAR ? (
          <StatusEditContainer
            buttons={
              <>
                <Button
                  color={second}
                  onClick={() => {
                    edit && updateReq(false);
                    setEdit(!edit);
                  }}
                >
                  {edit ? 'save' : 'edit the date'}
                </Button>
                <Button
                  color={active}
                  disabled={pickupDate == null || edit}
                  onClick={() => {
                    updateReq(true);
                  }}
                >
                  Go Further
                </Button>
              </>
            }
          >
            <CalendarPick
              disabled={!edit}
              title={'Pickup date'}
              current={pickupDate}
              onChange={(date: Date) => setPickupDate(date)}
            />
          </StatusEditContainer>
        ) : request.requestStatus == RequestStatusEnum.CAR_DIAGNOSIS ? (
          <StatusEditContainer
            second={
              <textarea
                className="w-full  min-w-full  text-black"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            }
            buttons={
              <>
                <Button
                  color={second}
                  onClick={() => {
                    updateReq(false);
                  }}
                >
                  send diagnosis
                </Button>
                <Button
                  color={active}
                  onClick={() => {
                    updateReq(true);
                  }}
                >
                  Go further{' '}
                </Button>
              </>
            }
          >
            <CalendarPick
              disabled={true}
              title={'Pickup date'}
              current={pickupDate}
              onChange={(date: Date) => setPickupDate(date)}
            />
          </StatusEditContainer>
        ) : request.requestStatus == RequestStatusEnum.IN_REPAIR ? (
          <StatusEditContainer
            buttons={
              <>
                {' '}
                <Button
                  color={second}
                  onClick={() => {
                    updateReq(false);
                  }}
                >
                  save
                </Button>
                <Button
                  color={active}
                  disabled={deliveryDate == null || edit}
                  onClick={() => {
                    updateReq(true);
                  }}
                >
                  Ready to go
                </Button>
              </>
            }
            second={
              <textarea
                disabled
                className="w-full  text-black"
                defaultValue={text}
                onChange={(e) => setText(e.target.value)}
              />
            }
          >
            <CalendarPick
              disabled={true}
              title={'Pickup date'}
              current={pickupDate}
              onChange={(date: Date) => setPickupDate(date)}
            />
            <CalendarPick
              title={'delivery date'}
              current={deliveryDate}
              onChange={(date: Date) => setDeliveryDate(date)}
            />
          </StatusEditContainer>
        ) : request.requestStatus == RequestStatusEnum.READY_TO_GO ? (
          <StatusEditContainer
            buttons={
              <Button
                color={active}
                onClick={() => {
                  updateReq(true);
                }}
              >
                Done{' '}
              </Button>
            }
          ></StatusEditContainer>
        ) : (
          <></>
        )}
      </div>
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
