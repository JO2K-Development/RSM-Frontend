import { FC, PropsWithChildren } from 'react';

interface PageLayoutProps {
  className?: string;
}

const PageLayout: FC<PropsWithChildren<PageLayoutProps>> = ({ children, className }) => {
  return <div className={`${className} h-screen`}>{children}</div>;
};

export default PageLayout;
