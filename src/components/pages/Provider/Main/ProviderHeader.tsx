import Provider from '../../../../types/Provider';
import PersonalSpace from './PersonalSpace';
import Loading from '../../../common/Loading';

interface ProviderHeaderProps {
  provider: Provider | null;
  loading: boolean;
}

const ProviderHeader: React.FC<ProviderHeaderProps> = ({ provider, loading }) => {
  return (
    <div className="relative     z-[5]   w-full  flex-col  gap-[1.5rem]  rounded-md p-[0.5rem] text-white lg:flex  xl:grid  xl:grid-cols-2 xl:p-[2rem] ">
      <h1 className="text-center  text-xl font-extrabold md:text-[3rem]   ">
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
