import RequestType from "../../../types/Request";
interface RequestCardProps {
  request: RequestType;
  handleButton?: (arg: string) => void;
}

const RequestCard: React.FC<RequestCardProps> = ({ request, handleButton }) => {
  const { title, state, message, carMake, carModel, createdAt } = request;

  return (
    <div
      className={` bg-yellow-100/80 text-black relative  rounded-lg p-[.8rem]   mx-[0.5rem]   pb-[1rem] flex flex-col text-[1.5rem]`}
    >
      <div className="flex duration-300 font-extrabold  justify-end mr-[1rem] items-baseline">
        <div
          onClick={() => {
            if (handleButton) handleButton(request.id || "");
          }}
          className="bg-green-800 p-[0.2rem] px-[0.8rem] text-[0.8em] mr-auto ml-[1rem] rounded-md text-white uppercase"
        >
          Button
        </div>
        <div className="italic ">{state}</div>
        <div className=" w-[50%] flex">
          <div className="ml-auto ">
            {carMake} {carModel}
            <span className="ml-[2rem]">{createdAt}</span>
          </div>
        </div>
      </div>
      <div className="font-bold"> {title}</div>
      <div className=" duration-300 text-[1.2rem] text  w-full">{message}</div>
    </div>
  );
};

export default RequestCard;
