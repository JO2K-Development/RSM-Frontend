import { useForm } from "react-hook-form";
import FormInput from "../../common/FormInput";
import {
  ProviderAuthState,
  loginProvider,
} from "../../../redux/slices/ProviderAuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, Store } from "../../../redux/store";
import { Navigate } from "react-router-dom";
import FormContainer from "../../containers/FormContainer";
import FormButton from "../Request/RequestForm/FormButton";
import FormTitle from "../Request/RequestForm/FormTitle";
import { InfinitySpin } from "react-loader-spinner";
import BottomHome from "../../common/BottomHome";

const LoginPage = () => {
  const { token, loading,email } = useSelector<Store, ProviderAuthState>(
    (state) => state.providerAuth
  );
  const dispatch = useDispatch<AppDispatch>();


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    dispatch(loginProvider(data)).then((arg) => {
      reset();
    });
  };

  return token ? (
    <Navigate to={`/provider/${token}`} />
  ) : (
    <div className="request-page-bg  h-screen w-full  relative overflow-hidden">
      <div className="bg-black bg-opacity-60  h-screen w-full  flex flex-col justify-center items-center ">
        <FormContainer handleSubmit={handleSubmit(onSubmit)}>
          <FormTitle title="Please enter your login  information" />
          <FormInput
            type="text"
            placeholder="email"
            rest={register("email", { required: true, maxLength: 80 })}
          />
          <FormInput
            type="password"
            placeholder="password"
            rest={register("password", { required: true, maxLength: 80 })}
          />
          <FormButton text="Login" onClick={() => {}} type="submit" />

          <div
            className={`w-full h-full  bg-black absolute opacity-90 scale-125 rounded-3xl duration-[20ms] flex items-center justify-center  ${
              !loading ? "hidden  " : ""
            }`}
          >
            <InfinitySpin width="200" color="red" />
          </div>
        </FormContainer>

        
      </div>
      <BottomHome/>
    </div>
  );
};

export default LoginPage;
