import { useHover } from '../../../../../hooks/useHover';
import RequestWithBackend from '../../../../../types/Request';
import { getStatusText } from '../../../../../types/RequestStatusEnum';

interface RequestCardProps {
  request: RequestWithBackend;
  handleButton?: (arg: string) => void;
  buttonText?: string;
  hideStatus?: boolean;
  active?: boolean;
  handleCard?: () => void;
}

const RequestCard: React.FC<RequestCardProps> = ({
  handleCard,
  active,
  request,
  handleButton,
  buttonText,
  hideStatus
}) => {
  const { message, carMake, carModel, creationDate: createdAt, requestStatus } = request;
  const isbutton = buttonText && handleButton;
  const random = 1 + Math.floor(Math.random() * 4);
  const angles = [5, -5, 2, -2];
  const hover = useHover({
    transform: `scale(0.95) perspective(200em) rotateX(${
      angles[Math.floor(Math.random() * angles.length)]
    }deg) rotateY(${angles[Math.floor(Math.random() * angles.length)]}deg)`
  });
  return (
    <div
      onClick={() => {
        handleCard && handleCard();
      }}
      {...hover}
      className={`${
        active && 'active'
      }  relative mx-[0.5rem]  flex flex-col  rounded-lg bg-yellow-100/80   p-[.8rem]   pb-[1rem] text-base text-black duration-500`}
    >
      <div className="mr-[1rem] flex   items-center justify-end duration-300">
        {isbutton ? (
          <button
            onClick={() => {
              if (handleButton) handleButton(request.id || '');
            }}
            className=" ml-[1rem] mr-auto rounded-md bg-green-600/80 p-[0.2rem] px-[0.8rem] text-sm font-extrabold uppercase text-white duration-150 hover:scale-110"
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
            {!hideStatus && (
              <div className={` text-end text-xs font-extrabold italic `}>
                {getStatusText(requestStatus)}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" text w-full px-[1rem]  text-sm">{message}</div>
    </div>
  );
};

export default RequestCard;
