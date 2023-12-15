import ProviderField from '../Common/ProviderField';

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
    <div className="grid grid-cols-2 h-full grid-rows-2 w-[90%] mx-auto text-[1.1rem] ">
      {' '}
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
