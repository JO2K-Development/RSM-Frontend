import { useForm } from 'react-hook-form';
import FormInput from '../../../../common/FormInput';
import { ProviderInfoState } from '../../../../../redux/slices/ProviderInfoSlice';
import { useSelector } from 'react-redux';
import { Store } from '../../../../../redux/store';
const ProviderAccount = () => {
  const {
    register,
    formState: { errors }
  } = useForm();

  const { ProviderInfo } = useSelector<Store, ProviderInfoState>((state) => state.providerInfo);

  return (
    <div className="flex flex-col max-w-[1200px] w-full mx-auto p-[2rem] gap-[1rem] text-[2rem]">
      <div className="flex text-white font-bold  items-center mr-[2rem]">
        <h1> Edit Profile</h1>
        <div className="ml-auto overflow-hidden rounded-full">
          <img
            src="/img/ziobro.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="flex gap-[2rem] ">
        <FormInput
          label="First name"
          type="firstName"
          placeholder="First name"
          defaultValue={ProviderInfo?.firstName}
          rest={register('firstName', { required: true, maxLength: 80 })}
        />

        <FormInput
          label="Last name"
          type="lastName"
          placeholder="Last name"
          defaultValue={ProviderInfo?.lastName}
          rest={register('lastName', { required: true, maxLength: 80 })}
        />
      </div>
      <FormInput
        label="Email"
        type="email"
        placeholder="Email"
        defaultValue={ProviderInfo?.email}
        rest={register('email', { required: true, maxLength: 80 })}
      />
      <FormInput
        label="Phone number"
        type="phoneNumber"
        placeholder="Phone number"
        defaultValue={ProviderInfo?.phoneNumber}
        rest={register('phoneNumber', { required: true, maxLength: 80 })}
      />
    </div>
  );
};

export default ProviderAccount;
