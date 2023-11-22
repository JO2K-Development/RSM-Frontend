import Provider from "../../../../types/Provider";
import PersonalSpace from "./PersonalSpace";

interface ProviderHeaderProps {
  provider:Provider;
}

const ProviderHeader: React.FC<ProviderHeaderProps> = ({ provider }) => {
  return (
    <div className="text-white   lg:grid-cols-2  w-full min-h-[15%] h-[15%] hidden lg:grid relative z-[5] ">
      <h1 className="text-center my-auto font-extrabold text-[3rem]">
        Have a great day, {provider.firstName}!
      </h1>
     <PersonalSpace firstName={provider.firstName} lastName={provider.lastName} phoneNumber={provider.phoneNumber} email={provider.email}/>
    </div>
  );
};

export default ProviderHeader;
