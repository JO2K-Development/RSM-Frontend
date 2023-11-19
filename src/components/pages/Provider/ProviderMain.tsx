import { useDispatch, useSelector } from "react-redux";
import {
  ProviderAuthState,
  logout,
} from "../../../redux/slices/ProviderAuthSlice";
import { AppDispatch, Store } from "../../../redux/store";
import { Navigate, useNavigate } from "react-router-dom";
import LinkButton from "../../common/LinkButton";
import ProviderHeader from "./ProviderHeader";
import requestSend from "../../../api/requestSend";
import Request from "../../../types/Request";
import RequestCard from "./RequestCard";
import ColumnProvider from "./ColumnProvider";

const SecuredMainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { token } = useSelector<Store, ProviderAuthState>(
    (state) => state.providerAuth
  );
  const handleLogout = () => {
    dispatch(logout());
  };

  const requests: Request[] = [
    {
      carMake: "dsa",
      carModel: "sda",
      creator: {
        firstName: "dsa",
        lastName: "das",
        email: "sda@sda",
        phoneNumber: "dsa",
      },
      message: "sad",
    },
    {
      carMake: "dsa",
      carModel: "sda",
      creator: {
        firstName: "dsa",
        lastName: "das",
        email: "sda@sda",
        phoneNumber: "dsa",
      },
      message: "sad",
    },
    {
      carMake: "dsa",
      carModel: "sda",
      creator: {
        firstName: "dsa",
        lastName: "das",
        email: "sda@sda",
        phoneNumber: "dsa",
      },
      message: "sad",
    },
  ];

  return token == null ? (
    <Navigate to="/provider/login" />
  ) : (
    <div className="provider-page-bg h-screen flex flex-col">
      <ProviderHeader />
      <div className="   grid grid-cols-2 max-h-[80vh] h-[80vh] flex-grow" >
      <ColumnProvider title={'Your pending requests!'}>
      <RequestCard />
         </ColumnProvider>
       
         <ColumnProvider  title={"The  requests that need to be taken care of!"} >
           {requests.map((request, index) => (
            <RequestCard key={index} />
                   ))}
         </ColumnProvider>
      </div>
    </div>
  );
};

export default SecuredMainPage;
