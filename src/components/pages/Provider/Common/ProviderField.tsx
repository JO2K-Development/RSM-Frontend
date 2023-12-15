interface ProviderFieldProps {
  text: string;
  value?: string;
}

const ProviderField: React.FC<ProviderFieldProps> = ({ text, value }) => {
  return (
    <div className="flex justify-around  items-center">
      <div className="mr-auto ml-[1rem]">{text}</div>
      <div className="mr-[1rem] font-bold">{value}</div>
    </div>
  );
};

export default ProviderField;
