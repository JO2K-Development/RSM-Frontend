import RequestType from '../../../types/Request';
interface RequestCardProps {
    request:RequestType
}
 
const RequestCard: React.FC<RequestCardProps> = ({request}) => {
    const {carMake,carModel,message}=request
    return ( <div className=" h-[40vh] bg-red-200 flex flex-col" >
                <div>       </div>


    </div> );
}
 
export default RequestCard;