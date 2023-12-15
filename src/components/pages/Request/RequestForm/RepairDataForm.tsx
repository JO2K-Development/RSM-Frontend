import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from '../../../common/FormInput';
import FormTitle from './FormTitle';
import FormButton from './FormButton';
import FormContainer from '../../../containers/FormContainer';

export interface RepairFormData {
  carMake: string;
  carModel: string;
  message: string;
  carYear?: number;
}
interface Props {
  addToForm: (data: any) => void;
  goBack: (arg: Object) => void;
  defaultValues?: RepairFormData;
}
const RepairDataForm: React.FC<Props> = ({ addToForm, defaultValues, goBack }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();
  const onSubmit = (data: any) => {
    addToForm(data);
  };

  return (
    <FormContainer handleSubmit={handleSubmit(onSubmit)}>
      <FormTitle title="Please enter information about the request" />
      <FormInput
        type="carMake"
        placeholder="Car make"
        defaultValue={defaultValues?.carMake}
        rest={register('carMake', { required: true, maxLength: 80 })}
      />
      <FormInput
        type="carModel"
        placeholder="Car model"
        defaultValue={defaultValues?.carModel}
        rest={register('carModel', { required: true, maxLength: 80 })}
      />
      <FormInput
        type="carYear"
        placeholder="Car year"
        defaultValue={defaultValues?.carYear?.toString()}
        rest={register('carYear', { required: true, maxLength: 80, pattern: /^[0-9]*$/ })}
      />
      <textarea
        {...register('message')}
        defaultValue={defaultValues?.message}
        name="message"
        rows={4}
      ></textarea>

      <div className="flex gap-3  justify-stretch">
        {' '}
        <FormButton
          text="back"
          onClick={() => {
            goBack(getValues());
          }}
          type="button"
        />
        <FormButton
          text="Next"
          onClick={() => {}}
          type="submit"
        />
      </div>
    </FormContainer>
  );
};

export default RepairDataForm;
