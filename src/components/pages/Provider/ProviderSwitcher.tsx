import {  useSelector } from "react-redux";
import { Store } from "../../../redux/store";
import {
  ProviderAuthState,
} from "../../../redux/slices/ProviderAuthReducer";
import Loading from "../../common/Loading";
import {  Navigate} from "react-router-dom";

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
    </div>
  );
};

export default ProviderSwitcher;
