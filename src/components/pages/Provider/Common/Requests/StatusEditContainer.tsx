import { FC, PropsWithChildren, ReactNode } from 'react';

interface StatusEditContainerProps {
  buttons?: ReactNode;
  second?: ReactNode;
}

const StatusEditContainer: FC<PropsWithChildren<StatusEditContainerProps>> = ({
  children,
  buttons,
  second
}) => {
  return (
    <div className="flex flex-col gap-[1.5rem]">
      <div className="mx-auto   gap-[0.5rem]  ">{children}</div>
      {second}
      <div className="flex w-full  justify-stretch   ">{buttons}</div>
    </div>
  );
};

export default StatusEditContainer;
