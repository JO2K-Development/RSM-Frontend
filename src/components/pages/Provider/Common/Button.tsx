import { FC, PropsWithChildren } from 'react';

interface ButtonProps {
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  color,
  onClick,
  disabled,
  type
}) => {
  return (
    <button
      type={type}
      className={`${!disabled && 'font-extrabold'} w-full p-[0.5rem] text-lg uppercase `}
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
