import { FieldValues, UseFormRegister } from "react-hook-form";
import FormInput from "../../common/FormInput";

interface DetailsFormProps {
    register:UseFormRegister<FieldValues>
}

const DetailsForm: React.FC<DetailsFormProps> = ({register}) => {

  return (
    <div>
        DETAILS
        {/* <FormInput
          type="message"
          placeholder="message"
          rest={register("message", { required: true, maxLength: 80 })}
        /> */}
          <textarea
        
            placeholder="message"
          rows={4}
          cols={40}
          {...register("message", { required: true, maxLength: 80 })}
        />
     
     
    </div>
  );
};

export default DetailsForm;
