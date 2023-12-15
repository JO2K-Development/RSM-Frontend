import { PropsWithChildren } from 'react';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className=" min-h-screen">{children}</div>;
};

export default MainLayout;
