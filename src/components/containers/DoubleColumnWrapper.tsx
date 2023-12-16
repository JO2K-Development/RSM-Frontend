import { FC } from 'react';

interface DoubleColumnWrapperProps {
  children: [JSX.Element, JSX.Element];
}

const DoubleColumnWrapper: FC<DoubleColumnWrapperProps> = ({ children }) => {
  return <div className="bg-red- min-h-0 grid grid-cols-2 flex-grow">{children}</div>;
};

export default DoubleColumnWrapper;
