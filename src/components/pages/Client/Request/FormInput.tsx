
interface FormInputProps {
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder: string;
  rest: any;
}

const FormInput: React.FC<FormInputProps> = ({ type, placeholder, rest }) => {
  return (
    <div>
      {" "}
      <input type={type} placeholder={placeholder} {...rest} />
    </div>
  );
};

export default FormInput;
