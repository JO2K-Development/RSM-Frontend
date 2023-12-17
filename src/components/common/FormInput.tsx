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
      <div className="text-[0.7em] text-white">{label}</div>
      <input
        className="w-full py-1 pl-2 "
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
