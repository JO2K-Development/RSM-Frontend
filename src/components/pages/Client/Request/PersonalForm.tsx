import { FieldValues, UseFormRegister } from "react-hook-form";
import FormInput from "./FormInput";

interface PersonalFormProps {
    register:UseFormRegister<FieldValues>
}
 
const PersonalForm: React.FC<PersonalFormProps> = ({register}) => {
    return (  <div className="flex gap-2 flex-col">PERSONAL <FormInput
        type="firstName"
        placeholder="firstName"
        rest={register("firstName", { required: true, maxLength: 80 })}
      />
      <FormInput
        type="lastName"
        placeholder="lastName"
        rest={register("lastName", { required: true, maxLength: 80 })}
      />
       <FormInput
        type="phoneNumber"
        placeholder="phoneNumber"
        rest={register("phoneNumber", { required: true, maxLength: 80 })}
      />
       <FormInput
        type="email"
        placeholder="email"
        rest={register("email", { required: true, maxLength: 80 })}
      />
      
      </div>);
}
 
export default PersonalForm;