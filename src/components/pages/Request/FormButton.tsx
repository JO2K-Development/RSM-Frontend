import { FunctionComponent } from "react";

interface FormButtonProps {
  text: string;
  onClick(): void;
  type?: "button" | "submit" | "reset" | undefined;
}

const FormButton: FunctionComponent<FormButtonProps> = ({
  text,
  onClick,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className=" w-full p-[0.8rem] text-white text-[1.2rem] font-extrabold rounded-lg bg-green-900 bg-opacity-80"
    >
      {text}
    </button>
  );
};

export default FormButton;
