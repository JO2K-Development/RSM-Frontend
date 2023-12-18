import React from 'react';
import { UseFormGetValues, useForm } from 'react-hook-form';
import FormInput from '../../../common/FormInput';
import FormTitle from './FormTitle';
import FormButton from './FormButton';
import FormContainer from '../../../containers/FormContainer';
import { RequestDetailsFromUser, RequestWithoutBackend } from '../../../../types/Request';

interface Props {
  addToForm: (data: RequestDetailsFromUser) => void;
  goBack: (arg: RequestDetailsFromUser) => void;
  defaultValues: RequestDetailsFromUser;
}
const RepairDataForm: React.FC<Props> = ({ addToForm, defaultValues, goBack }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<RequestDetailsFromUser>();
  const onSubmit = (data: any) => {
    console.log(data);
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
        type="number"
        placeholder="Car year"
        defaultValue={defaultValues?.carYear?.toString()}
        rest={register('carYear', { valueAsNumber: true, required: true, maxLength: 80 })}
      />
      <FormInput
        type="licensePlateNumber"
        placeholder="Licence Plate Number"
        defaultValue={defaultValues?.licencePlateNumber?.toString()}
        rest={register('licencePlateNumber', { required: true, maxLength: 80 })}
      />
      <textarea
        {...register('message')}
        defaultValue={defaultValues?.message}
        name="message"
        rows={4}
      ></textarea>

      <div className="flex justify-stretch  gap-3">
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
