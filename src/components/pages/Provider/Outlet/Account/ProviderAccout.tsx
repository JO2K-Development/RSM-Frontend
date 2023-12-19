import { useForm } from 'react-hook-form';
import FormInput from '../../../../common/FormInput';
import { ProviderInfoState } from '../../../../../redux/slices/ProviderInfoSlice';
import { useSelector } from 'react-redux';
import { Store } from '../../../../../redux/store';
import FlexCenterContainer from '../../../../containers/FlexCenterContainer';
import PageLayout from '../../../../containers/PageLayout';
import { useEffect, useState } from 'react';
import Button from '../../Common/Button';
const ProviderAccount = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const { ProviderInfo } = useSelector<Store, ProviderInfoState>((state) => state.providerInfo);
  const [edit, setEdit] = useState(false);
  const handleSave = (data: any) => {
    console.log(data);
  };
  useEffect(() => {
    if (ProviderInfo) {
      reset({
        firstName: ProviderInfo.firstName || '',
        lastName: ProviderInfo.lastName || '',
        email: ProviderInfo.email || '',
        phoneNumber: ProviderInfo.phoneNumber || ''
      });
    }
  }, [ProviderInfo, reset]);
  return (
    <PageLayout>
      <FlexCenterContainer className=" bg-black/80 text-base text-black ">
        <form
          onSubmit={handleSubmit(handleSave)}
          className="mx-auto flex max-w-[800px] flex-col gap-[.5rem] "
        >
          <h1 className="px-[2rem] text-xl font-extrabold text-white "> Edit your profile!</h1>
          <FormInput
            disabled={!edit}
            label="First name"
            type="firstName"
            placeholder="First name"
            rest={register('firstName', { maxLength: 80, required: true })}
          />
          <FormInput
            disabled={!edit}
            label="Last name"
            type="lastName"
            placeholder="Last name"
            rest={register('lastName', { required: true, maxLength: 80 })}
          />
          <FormInput
            disabled={!edit}
            label="Email"
            type="email"
            placeholder="Email"
            rest={register('email', { required: true, maxLength: 80 })}
          />

          <FormInput
            disabled={!edit}
            label="Phone number"
            type="phoneNumber"
            placeholder="Phone number"
            rest={register('phoneNumber', { required: true, maxLength: 80 })}
          />
          <div className="flex  text-white">
            <Button
              type="button"
              onClick={() => {
                setEdit(!edit);
              }}
            >
              {edit ? 'cancel' : 'edit'}{' '}
            </Button>

            <Button
              disabled={!edit}
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
      </FlexCenterContainer>
    </PageLayout>
  );
};

export default ProviderAccount;
