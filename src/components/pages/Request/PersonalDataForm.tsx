import { useForm } from "react-hook-form";
import FormInput from "../../common/FormInput";
import FormTitle from "./FormTitle";
import FormButton from "./FormButton";
import FormContainer from "../../containers/FormContainer";

export interface PersonalFormDataState {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}
interface PersonalDataFormProps {
  addToForm: (data: any) => void;
  defaultValues?: PersonalFormDataState;
}
const PersonalDataForm: React.FC<PersonalDataFormProps> = ({
  addToForm,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit = (data: any) => {
    addToForm(data);
  };
  return (
    <FormContainer handleSubmit={handleSubmit(onSubmit)}>
      <FormTitle title="Please enter your personal information" />
      <FormInput
        type="firstName"
        placeholder="firstName"
        defaultValue={defaultValues?.firstName}
        rest={register("firstName", { required: true, maxLength: 80 })}
      />
      <FormInput
        type="lastName"
        placeholder="lastName"
        defaultValue={defaultValues?.lastName}
        rest={register("lastName", { required: true, maxLength: 80 })}
      />
      <FormInput
        type="phoneNumber"
        placeholder="phoneNumber"
        defaultValue={defaultValues?.phoneNumber}
        rest={register("phoneNumber", { required: true, maxLength: 80 })}
      />
      <FormInput
        type="email"
        placeholder="email"
        defaultValue={defaultValues?.email}
        rest={register("email", { required: true, maxLength: 80 })}
      />
      <FormButton text="Next" onClick={() => {}} type="submit" />
    </FormContainer>
  );
};

export default PersonalDataForm;
