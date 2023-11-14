import { useForm } from "react-hook-form";
import PersonalForm from "./PersonalForm";
import DetailsForm from "./DetailsForm";

const GeneralForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonalForm register={register} />
      <DetailsForm register={register} />
      <input type="submit" />
    </form>
  );
};

export default GeneralForm;
