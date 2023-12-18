import Client from './Client';
import Provider from './Provider';
import RequestStatus from './RequestStatusEnum';

export interface RequestPersonalData {
  creator: Client;
}
export interface RequestDetailsFromUser {
  message: string;
  carMake: string;
  carModel: string;

  carYear: number | null;
  licencePlateNumber: string;
}

export interface RequestDetailsFromBackend {
  creationDate: string;
  id: string;
  assignedTo: Provider;
  requestStatus: RequestStatus;
  pickupDate: Date | null;
  deliveryDate: Date | null;
  diagnosis: string | null;
}
export interface RequestWithoutBackend extends RequestDetailsFromUser, RequestPersonalData {}
export interface RequestWithBackend
  extends RequestDetailsFromUser,
    RequestDetailsFromBackend,
    RequestPersonalData {}
export default RequestWithBackend;
