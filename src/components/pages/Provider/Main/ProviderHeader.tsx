import Provider from '../../../../types/Provider';
import PersonalSpace from './PersonalSpace';
import Loading from '../../../common/Loading';

interface ProviderHeaderProps {
  provider: Provider | null;
  loading: boolean;
}

const ProviderHeader: React.FC<ProviderHeaderProps> = ({ provider, loading }) => {
  return (
    <div className="text-white     xl:grid-cols-2   w-full  xl:grid  lg:flex  flex-col gap-[1.5rem] relative z-[5]  p-[0.5rem]  rounded-md xl:p-[2rem] ">
      <h1 className="text-center  font-extrabold md:text-[3rem] text-lg   ">
        Have a great day{provider?.firstName && ','} {provider?.firstName}!
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
