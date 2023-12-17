interface ProviderFieldProps {
  text: string;
  value?: string;
}

const ProviderField: React.FC<ProviderFieldProps> = ({ text, value }) => {
  return (
    <div className="flex items-center  justify-around">
      <div className="ml-[1rem] mr-auto">{text}</div>
      <div className="mr-[1rem] font-bold">{value}</div>
    </div>
  );
};

export default ProviderField;
