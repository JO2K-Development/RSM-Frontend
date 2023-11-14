interface MainLayoutProps {
  children: JSX.Element[] | null | JSX.Element;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default MainLayout;
