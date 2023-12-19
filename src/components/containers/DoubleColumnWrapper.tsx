import { FC } from 'react';

interface DoubleColumnWrapperProps {
  children: [JSX.Element, JSX.Element];
}

const DoubleColumnWrapper: FC<DoubleColumnWrapperProps> = ({ children }) => {
  return <div className="bg-red- grid min-h-0 flex-grow grid-cols-2 pb-[0.5rem]">{children}</div>;
};

export default DoubleColumnWrapper;
