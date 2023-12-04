import allRequests from "../../api/allRequests";
import allProviders from "../../api/allProviders";

interface MainLayoutProps {
  children: JSX.Element[] | null | JSX.Element;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  
  // allRequests().then(data=>data.json()).then(data=>console.log(data))
  
  // allProviders().then(data=>data.json()).then(data=>console.log("prov",data))
  
  return (<div className=" min-h-screen">{children}</div>);
};

export default MainLayout;
