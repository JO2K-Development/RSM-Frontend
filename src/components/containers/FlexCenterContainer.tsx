import { FC, HTMLAttributes, PropsWithChildren } from 'react';
interface Props {
  className?: string | undefined;
}
const FlexCenterContainer: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center text-center ${className}`}
    >
      {children}
    </div>
  );
};

export default FlexCenterContainer;
