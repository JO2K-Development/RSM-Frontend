import { FC, PropsWithChildren, useRef, useState } from 'react';

interface AccordionProps {
  title: string;
}

const Accordion: FC<PropsWithChildren<AccordionProps>> = ({ children, title }) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="overflow-hidden "
      style={{
        maxHeight: show
          ? `${ref.current?.clientHeight! + contentRef.current?.clientHeight!}px`
          : `${ref.current?.clientHeight}px`,
        transition: !show ? 'max-height 0.3s ' : 'max-height 0.3s ',
        willChange: 'max-height'
      }}
    >
      <h1
        className="cursor-pointer bg-neutral-500/20"
        onClick={() => {
          setShow(!show);
        }}
        ref={ref}
      >
        {title}
      </h1>
      <div ref={contentRef}>{children}</div>{' '}
    </div>
  );
};

export default Accordion;
