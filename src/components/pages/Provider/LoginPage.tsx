import { useForm } from "react-hook-form";
import FormInput from "../../common/FormInput";
import { ProviderAuthState, loginProvider } from "../../../redux/slices/ProviderAuthReducer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, Store } from "../../../redux/store";
import {  useNavigate } from "react-router-dom";


 
const LoginPage = () => {
    const{token,loading}=useSelector<Store,ProviderAuthState>((state)=>state.providerAuth)
    const dispatch=useDispatch<AppDispatch>()
    const navigate = useNavigate();
    
  console.log(token,loading)
  
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data:any ) => {
        dispatch(loginProvider(data))
        navigate('/provider')
        };



    return (  <div>LOGIN<form onSubmit={handleSubmit(onSubmit)}>
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
        <input type="submit" />
        </form></div>);
}
 
export default LoginPage;

