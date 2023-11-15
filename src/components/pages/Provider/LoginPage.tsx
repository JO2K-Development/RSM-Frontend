import { useForm } from "react-hook-form";
import FormInput from "../../common/FormInput";
import { Login } from "../../../api/login";

interface LoginPageProps {
  login(login:Login):void
}
 
const LoginPage :React.FC<LoginPageProps>= ({login}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data:any ) => {
          login(data)
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