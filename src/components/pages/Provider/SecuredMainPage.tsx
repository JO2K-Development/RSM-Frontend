import { useDispatch, useSelector } from "react-redux";
import { ProviderAuthState, logout } from "../../../redux/slices/ProviderAuthReducer";
import { AppDispatch, Store } from "../../../redux/store";
import { Navigate, useNavigate } from "react-router-dom";
import LinkButton from "../../common/LinkButton";


const SecuredMainPage = () => {
    const dispatch=useDispatch<AppDispatch>()
    const navigate = useNavigate();
  const { token } = useSelector<Store,ProviderAuthState>((state)=>state.providerAuth)
  const handleLogout=()=>{dispatch(logout());
navigate('/provider')}
  return token == null ? (
    <Navigate to='/provider/login'/>
  ) : (
    <div>
      {" "}
      <LinkButton goTo="/home" text="req"/> 
      SECURED{" "}
      <button
        onClick={() => {
          handleLogout();
        }}
      >
        LOGOUT
      </button>{" "}
    </div>
  );
};

export default SecuredMainPage;
