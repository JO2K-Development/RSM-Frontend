import { FC, useRef, useState } from 'react';
import RequestType from '../../../../../types/Request';
import { motion } from 'framer-motion';
import Accordion from './Accordion';

interface ActiveRequestViewProps {
  request: RequestType | null;
}

const ActiveRequestView: FC<ActiveRequestViewProps> = ({ request }) => {
  console.log(request);
  return (
    request && (
      <div className="flex flex-col  gap-[1rem]">
        <Accordion title={'first'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum aut qui natus odio
          odit temporibus illum repellat maiores quibusdam, omnis explicabo necessitatibus! Cum, ad
          velit! Ipsam consectetur architecto aliquam.
        </Accordion>
        <Accordion title={'second'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam? Ipsam
          repudiandae dicta hic architecto obcaecati, saepe incidunt voluptatibus commodi velit quis
          veritatis debitis, blanditiis dolores rem fuga omnis sequi.
        </Accordion>
      </div>
    )
  );
};

export default ActiveRequestView;
