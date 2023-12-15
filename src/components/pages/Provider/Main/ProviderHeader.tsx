import { Bars } from 'react-loader-spinner';
import Provider from '../../../../types/Provider';
import PersonalSpace from './PersonalSpace';
import Loading from '../../../common/Loading';

interface ProviderHeaderProps {
  provider: Provider | null;
  loading: boolean;
}

const ProviderHeader: React.FC<ProviderHeaderProps> = ({ provider, loading }) => {
  return (
    <div className="text-white   lg:grid-cols-2  w-full min-h-[15%] h-[15%] hidden lg:grid relative z-[5] pt-[0.5rem] ">
      <h1 className="text-center my-auto font-extrabold text-[3rem]">
        Have a great day, {provider?.firstName}!
      </h1>
      {loading ? (
        <Loading />
      ) : (
        <PersonalSpace
          firstName={provider?.firstName}
          lastName={provider?.lastName}
          phoneNumber={provider?.phoneNumber}
          email={provider?.email}
        />
      )}
    </div>
  );
};

export default ProviderHeader;
