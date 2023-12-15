import { useForm } from 'react-hook-form';
import FormInput from '../../../common/FormInput';
import FormTitle from './FormTitle';
import FormButton from './FormButton';
import FormContainer from '../../../containers/FormContainer';
import RequestType from '../../../../types/Request';
import User from '../../../../types/User';

interface PersonalDataFormProps {
  addToForm: (data: any) => void;
  defaultValues?: RequestType;
}
export interface PersonalDataForm {
  creator: User;
}
const PersonalDataForm: React.FC<PersonalDataFormProps> = ({ addToForm, defaultValues }) => {
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
      <FormTitle title="Please enter your personal information" />
      <FormInput
        type="firstName"
        placeholder="First name"
        defaultValue={defaultValues?.creator.firstName}
        rest={register('creator.firstName', { required: true, maxLength: 80 })}
      />
      <FormInput
        type="lastName"
        placeholder="Last name"
        defaultValue={defaultValues?.creator.lastName}
        rest={register('creator.lastName', { required: true, maxLength: 80 })}
      />
      <FormInput
        type="phoneNumber"
        placeholder="Phone number"
        defaultValue={defaultValues?.creator.phoneNumber}
        rest={register('creator.phoneNumber', {
          required: true,
          maxLength: 80
        })}
      />
      <FormInput
        type="email"
        placeholder="Email"
        defaultValue={defaultValues?.creator.email}
        rest={register('creator.email', { required: true, maxLength: 80 })}
      />
      <FormButton
        text="Next"
        onClick={() => {}}
        type="submit"
      />
    </FormContainer>
  );
};

export default PersonalDataForm;
