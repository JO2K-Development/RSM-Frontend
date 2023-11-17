import {  useSelector } from "react-redux";
import { Store } from "../../../redux/store";
import {
  ProviderAuthState,
} from "../../../redux/slices/ProviderAuthSlice";
import Loading from "../../common/Loading";
import {  Navigate, Outlet} from "react-router-dom";

const ProviderSwitcher = () => {
  const providerAuthState = useSelector<Store, ProviderAuthState>(
    (state) => state.providerAuth
  );

  return (
    <div>
      PROVIDER
      
      {providerAuthState.loading ? (
        <Loading />
      ) : providerAuthState.token ? (
        <Navigate to={`${providerAuthState.token}`} />
      ) : (
        <Navigate to="login" />
      )}


     <Outlet />
    </div>
  );
};

export default ProviderSwitcher;
