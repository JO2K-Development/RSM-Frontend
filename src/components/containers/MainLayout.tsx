interface MainLayoutProps {
  children: JSX.Element[] | null | JSX.Element;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <div className="bg-red-200 min-h-screen">{children}</div>;
};

export default MainLayout;
