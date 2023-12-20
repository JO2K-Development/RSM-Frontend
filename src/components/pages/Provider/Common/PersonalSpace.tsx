import ProviderField from './ProviderField';

interface PersonalSpaceProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
}

const PersonalSpace: React.FC<PersonalSpaceProps> = ({
  firstName,
  lastName,
  email,
  phoneNumber
}) => {
  return (
    <div className=" mx-auto  hidden grid-cols-2 grid-rows-2 text-sm md:grid  md:w-[80%] xl:w-full  ">
      <ProviderField
        text={'First name:'}
        value={firstName}
      />
      <ProviderField
        text={'Email:'}
        value={email}
      />
      <ProviderField
        text={'Last name:'}
        value={lastName}
      />
      <ProviderField
        text={'Phone number:'}
        value={phoneNumber}
      />
    </div>
  );
};

export default PersonalSpace;
