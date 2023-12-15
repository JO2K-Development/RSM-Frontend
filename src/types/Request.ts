import Client from './Client';
import Provider from './Provider';
interface RequestType {
  id?: string;
  title?: string;
  state?: string;
  creator: Client;
  assignedTo?: Provider;
  message: string;
  carMake: string;
  carModel: string;
  createdAt?: string;
  carYear?: number;
}
export default RequestType;
