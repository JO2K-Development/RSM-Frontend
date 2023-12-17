import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';

interface AccordionProps {
  title: string;
}

const Accordion: FC<PropsWithChildren<AccordionProps>> = ({ children, title }) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number | null>(null);
  useEffect(() => {
    if (ref.current && contentRef.current) {
      setMaxHeight(
        !show
          ? ref.current.clientHeight
          : ref.current.clientHeight + contentRef.current.clientHeight
      );
    }
  }, [show, children]);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div
      style={{
        maxHeight: `${maxHeight}px`,
        overflow: 'hidden',
        transition: 'max-height 0.3s ',
        willChange: 'max-height'
      }}
    >
      <h1
        className="cursor-pointer bg-neutral-500/20 p-[0.5rem] text-center text-lg font-[1000]"
        onClick={() => {
          setShow(!show);
        }}
        ref={ref}
      >
        {title}
      </h1>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default Accordion;
