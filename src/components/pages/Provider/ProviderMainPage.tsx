import { useDispatch, useSelector } from "react-redux";
import {
  ProviderAuthState,
  logout,
} from "../../../redux/slices/ProviderAuthSlice";
import { AppDispatch, Store } from "../../../redux/store";
import { Navigate, Outlet, useLocation, useNavigate, useOutlet } from "react-router-dom";
import LinkButton from "../../common/LinkButton";
import ProviderHeader from "./Main/ProviderHeader";
import requestSend from "../../../api/requestSend";
import RequestType from "../../../types/Request";
import Provider from "../../../types/Provider";
import RequestCard from "./RequestCard";
import ColumnProvider from "./Main/ColumnProvider";
import Navbar from "./Navbar";

const ProviderMainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { token } = useSelector<Store, ProviderAuthState>(
    (state) => state.providerAuth
  );
  const handleLogout = () => {
    dispatch(logout());
  };

  const provider:Provider={
    firstName:"walter",
    lastName:'white',
    email:'walter@white',
    phoneNumber:'1234567890'
  }

  const requests: RequestType[] = [
    {
      createdAt: "20.20.1020",
      carMake: "toyota",
      carModel: "yarsi",
      creator: {
        firstName: "dsa",
        lastName: "das",
        email: "sda@sda",
        phoneNumber: "dsa",
      },

      message: "rozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwrozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem srozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem srozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem srozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sa",
    },

    {
      createdAt: "20.20.1020",
      carMake: "toyota",
      carModel: "yarsi",
      creator: {
        firstName: "dsa",
        lastName: "das",
        email: "sda@sda",
        phoneNumber: "dsa",
      },

      message: "adsklaskljdlasfjlasfj sie kurwarozjebałem sie kurwarozjebałem sa",
    },
    {
      createdAt: "20.20.1020",
      carMake: "toyota",
      carModel: "yarsi",
      creator: {
        firstName: "dsa",
        lastName: "das",
        email: "sda@sda",
        phoneNumber: "dsa",
      },

      message: "rozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwrozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem srozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem srozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem srozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sie kurwarozjebałem sa",
    },

    {
      createdAt: "20.20.1020",
      carMake: "toyota",
      carModel: "yarsi",
      creator: {
        firstName: "dsa",
        lastName: "das",
        email: "sda@sda",
        phoneNumber: "dsa",
      },

      message: "adsklaskljdlasfjlasfj sie kurwarozjebałem sie kurwarozjebałem sa",
    },
  
  ];
  const outlet = useOutlet()
  
  return token == null ? (
    <Navigate to="/provider/login" />
  ) : (
    <div className="provider-page-bg">
      <div className=" bg-neutral-900/60 lg:h-screen  flex flex-col ">
        <Navbar />
        <ProviderHeader provider={provider} />
        <Outlet/>
        { !outlet&&<div className="min-h-0   grid lg:grid-cols-2 lg:max-h-[80%] lg:h-[80%] h-[90vh] flex-grow" >
        <ColumnProvider title={'Your pending requests!'}>
        {requests.map((request, index) => (
              <RequestCard key={index} request={request} />
                     ))}
           </ColumnProvider>
      
           <ColumnProvider  title={"The  requests that need to be taken care of!"} >
             {requests.map((request, index) => (
              <RequestCard key={index} request={request} />
                     ))}
           </ColumnProvider>
        </div>
   }
    </div>
    </div>);
};

export default ProviderMainPage;
