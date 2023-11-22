import RequestType from "../../../types/Request";
interface RequestCardProps {
  request: RequestType;
}

const RequestCard: React.FC<RequestCardProps> = ({ request }) => {
  const { carMake, carModel, message, creator, createdAt } = request;

  //tailwind do stylowania 
  // nalezy wyswietlic dane ktore sa podane na gorze  carMake, carModel, message, creator, createdAt 
  return (
    <div 
    className={` relative  rounded-lg  border backdrop-blur   mx-[0.5rem] h-fit  pb-[1rem] flex flex-col text-[1.5rem]`}>
      <div className="flex duration-300  ">
        <div className=" mx-[0.5rem] mt-[0.5rem] w-full flex">
            <div> essa<div className="" /></div>
          <div className="ml-auto ">
              {carMake} {carModel}
              <span className="mx-[1rem]">{createdAt}</span>
          </div>
        </div>
       
      </div>
      <div className=" duration-300 text-[1rem] mx-[0.5rem] mt-[0.5rem] w-full">{message}</div>
      
    </div>
  );
};

export default RequestCard;
