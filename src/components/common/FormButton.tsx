import { FunctionComponent } from 'react';

interface FormButtonProps {
  text: string;
  onClick(): void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const FormButton: FunctionComponent<FormButtonProps> = ({ text, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className=" group w-full  rounded-lg bg-green-900  bg-opacity-80  p-[1em] font-extrabold text-white"
    >
      <div className=" duration-300 hover:scale-110">{text}</div>
    </button>
  );
};

export default FormButton;
