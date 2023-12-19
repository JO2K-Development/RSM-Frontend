interface FormInputProps {
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder: string;
  defaultValue?: string;
  label?: string;
  rest: any;
  disabled?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  defaultValue,
  type,
  placeholder,
  rest,
  label,
  disabled
}) => {
  return (
    <div className="flex w-full flex-col ">
      <div className="text-left text-[0.7em] text-white">{label}</div>
      <input
        className="w-full rounded-md bg-gray-200 py-[0.2] pl-2 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:opacity-50 "
        disabled={disabled}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
