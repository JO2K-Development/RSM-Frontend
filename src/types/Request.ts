import Client from './Client';
import Provider from './Provider';
import RequestStatus from './RequestStatusEnum';
interface RequestType {
  diagnosis?: string;
  id?: string;
  title?: string;
  state?: string;
  creator: Client;
  assignedTo?: Provider;
  message: string;
  carMake: string;
  carModel: string;
  creationDate?: string;
  carYear?: number;
  requestStatus?: RequestStatus;
  pickupDate?: Date | null;
  deliveryDate?: Date | null;
}
export default RequestType;
