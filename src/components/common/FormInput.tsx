
interface FormInputProps {
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder: string;
  defaultValue?:string;
  rest: any;
}

const FormInput: React.FC<FormInputProps> = ({ defaultValue,type, placeholder,  rest }) => {
  return (
    <div className="w-full flex ">
    
      <input className="w-full py-1 pl-2 " type={type} defaultValue={defaultValue} placeholder={placeholder} {...rest} />
    </div>
  );
};

export default FormInput;
