interface FormInputProps {
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder: string;
  defaultValue?: string;
  label?: string;
  rest: any;
}

const FormInput: React.FC<FormInputProps> = ({ defaultValue, type, placeholder, rest, label }) => {
  return (
    <div className="w-full flex flex-col ">
      <div className="text-[0.7em] text-white">{label}</div>
      <input
        className="w-full py-1 pl-2 "
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
