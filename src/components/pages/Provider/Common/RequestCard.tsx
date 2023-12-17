import RequestType from '../../../../types/Request';
import { getStatusText } from '../../../../types/RequestStatusEnum';

interface RequestCardProps {
  request: RequestType;
  handleButton?: (arg: string) => void;
  buttonText?: string;
  showStatus?: boolean;
  showMessage?: boolean;
  active?: boolean;
  handleCard?: () => void;
}

const RequestCard: React.FC<RequestCardProps> = ({
  handleCard,
  active,
  request,
  handleButton,
  buttonText,
  showMessage,
  showStatus
}) => {
  const { title, message, carMake, carModel, creationDate: createdAt, requestStatus } = request;
  const isbutton = buttonText && handleButton;
  const random = 1 + Math.floor(Math.random() * 4);
  return (
    <div
      onClick={() => {
        handleCard && handleCard();
      }}
      className={`${
        active && 'active'
      }   tilt${random} relative mx-[0.5rem]  flex flex-col  rounded-lg bg-yellow-100/80   p-[.8rem]   pb-[1rem] text-[1.5rem] text-black duration-300`}
    >
      <div className="mr-[1rem] flex   items-center justify-end duration-300">
        {isbutton ? (
          <button
            onClick={() => {
              if (handleButton) handleButton(request.id || '');
            }}
            className=" ml-[1rem] mr-auto rounded-md bg-green-600/80 p-[0.2rem] px-[0.8rem] text-[0.8em] font-extrabold uppercase text-white duration-300 hover:scale-110"
          >
            {buttonText}
          </button>
        ) : (
          <></>
        )}

        <div className={`  ${!isbutton ? 'flex w-full justify-center ' : 'w-[50%] '}  `}>
          <div
            className={`  ${
              isbutton
                ? 'ml-auto flex flex-col items-end'
                : 'grid  w-full grid-cols-2 items-center gap-[2rem]'
            }   `}
          >
            <div>
              {carMake} {carModel}
              <span className="ml-[2rem] hidden xl:inline-block ">{createdAt}</span>
            </div>
            <div className={` text-end text-[0.6em] font-extrabold italic `}>
              {getStatusText(requestStatus)}
            </div>
          </div>
        </div>
      </div>
      <div className=" text w-full px-[1rem]  text-[1.2rem]">{message}</div>
    </div>
  );
};

export default RequestCard;
