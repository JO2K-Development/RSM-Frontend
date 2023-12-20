import { FC } from 'react';
import RequestWithBackend from '../../../../../types/Request';
import Accordion from '../Accordion';
import ProviderField from '../ProviderField';
import StatusEditor from './StatusEditor';
interface ActiveRequestViewProps {
  request: RequestWithBackend | null;
}

const ActiveRequestView: FC<ActiveRequestViewProps> = ({ request }) => {
  console.log(request);
  return (
    request && (
      <div className="flex flex-col  gap-[1rem] text-sm xl:text-base">
        <Accordion title={'Client'}>
          <div className="grid grid-cols-2">
            <ProviderField
              text={'First Name:'}
              value={request.creator?.firstName}
            />
            <ProviderField
              text={'Last Name:'}
              value={request.creator?.lastName}
            />
            <ProviderField
              text={'Phone Number:'}
              value={request.creator?.phoneNumber}
            />
            <ProviderField
              text={'Email:'}
              value={request.creator?.email}
            />
          </div>
        </Accordion>
        <Accordion title={'Assignement details'}>
          <div className="grid grid-cols-2">
            <ProviderField
              text={'Car make:'}
              value={request.carMake}
            />
            <ProviderField
              text={'Car year:'}
              value={request.carYear?.toString()}
            />
            <ProviderField
              text={'Car model:'}
              value={request.carModel}
            />
            <ProviderField
              text={'License  plate:'}
              value={request.licencePlateNumber}
            />
          </div>
          <div className="">{request.message}</div>
        </Accordion>
        <Accordion title={'Assignment Edition'}>
          <StatusEditor request={request} />
        </Accordion>
      </div>
    )
  );
};

export default ActiveRequestView;
