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
  console.log(random);
  return (
    <div
      onClick={() => {
        handleCard && handleCard();
      }}
      className={`${
        active && 'active'
      }   tilt${random} duration-300  bg-yellow-100/80  text-black relative  rounded-lg p-[.8rem]   mx-[0.5rem]   pb-[1rem] flex flex-col text-[1.5rem]`}
    >
      <div className="flex duration-300   justify-end mr-[1rem] items-center">
        {isbutton ? (
          <button
            onClick={() => {
              if (handleButton) handleButton(request.id || '');
            }}
            className=" bg-green-600/80 hover:scale-110 duration-300 font-extrabold p-[0.2rem] px-[0.8rem] text-[0.8em] mr-auto ml-[1rem] rounded-md text-white uppercase"
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
                ? 'flex flex-col ml-auto items-end'
                : 'w-full  gap-[2rem] grid grid-cols-2 items-center'
            }   `}
          >
            <div>
              {carMake} {carModel}
              <span className="ml-[2rem] hidden xl:inline-block ">{createdAt}</span>
            </div>
            <div className={` font-extrabold italic text-[0.6em] text-end `}>
              {getStatusText(requestStatus)}
            </div>
          </div>
        </div>
      </div>
      <div className=" px-[1rem] text-[1.2rem] text  w-full">{message}</div>
    </div>
  );
};

export default RequestCard;
