import { FC, PropsWithChildren } from 'react';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className=" min-h-screen text-white">{children}</div>;
};

export default MainLayout;
