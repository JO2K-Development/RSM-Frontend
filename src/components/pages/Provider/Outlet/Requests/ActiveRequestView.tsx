import { FC, useEffect, useRef, useState } from 'react';
import RequestType from '../../../../../types/Request';
import { motion } from 'framer-motion';
import Accordion from './Accordion';
import ProviderField from '../../Common/ProviderField';

interface ActiveRequestViewProps {
  request: RequestType | null;
}

const ActiveRequestView: FC<ActiveRequestViewProps> = ({ request }) => {
  return (
    request && (
      <div className="flex flex-col  gap-[1rem] ">
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
              text={'Car make:'}
              value={request.carMake}
            />
            <ProviderField
              text={'Car model:'}
              value={request.carModel}
            />
          </div>
          <div className="">{request.message}</div>
        </Accordion>
      </div>
    )
  );
};

export default ActiveRequestView;
