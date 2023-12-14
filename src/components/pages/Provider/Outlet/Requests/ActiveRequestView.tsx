import { FC } from "react";
import RequestType from "../../../../../types/Request";

interface ActiveRequestViewProps {
    request:RequestType|null

}
 
const ActiveRequestView: FC<ActiveRequestViewProps> = ({request}) => {
    return ( request&&<div>

{request.id}


    </div> );
}
 
export default ActiveRequestView;