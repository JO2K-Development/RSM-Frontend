import { useForm } from "react-hook-form";
import FormInput from "../../common/FormInput";

 
const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data: any) => console.log(data);
    return (  <div>LOGIN<form>
        <FormInput
        type="text"
        placeholder="lastName"
        rest={register("lastName", { required: true, maxLength: 80 })}
      />
      <FormInput
        type="password"
        placeholder="password"
        rest={register("password", { required: true, maxLength: 80 })}
      />
        
        </form></div>);
}
 
export default LoginPage;