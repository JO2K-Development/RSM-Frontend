import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../common/FormInput";
import FormTitle from "./FormTitle";
import FormButton from "./FormButton";

export interface RepairFormData {
  carMake: string;
  carModel: string;
  message: string;
}
interface Props {
  addToForm: (data: any) => void;
  goBack: (arg: Object) => void;
  defaultValues?: RepairFormData;
}
const RepairDataForm: React.FC<Props> = ({
  addToForm,
  defaultValues,
  goBack,
}) => {
  // Component logic here

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-[1rem] flex-col items-stretch">
        <FormTitle title="Please enter information about the request" />
        <FormInput
          type="carMake"
          placeholder="carMake"
          defaultValue={defaultValues?.carMake}
          rest={register("carMake", { required: true, maxLength: 80 })}
        />
        <FormInput
          type="carModel"
          placeholder="carModel"
          defaultValue={defaultValues?.carModel}
          rest={register("carModel", { required: true, maxLength: 80 })}
        />
        <textarea
          {...register("message")}
          defaultValue={defaultValues?.message}
          name="message"
          rows={4}
        ></textarea>

        <div  className="flex gap-3  justify-stretch">
          {" "}
          <FormButton text="back" onClick={()=>{goBack(getValues())}} type="button" />
          <FormButton text="Next" onClick={() => {}} type="submit" />
        </div>
      </div>
    </form>
  );
};

export default RepairDataForm;
