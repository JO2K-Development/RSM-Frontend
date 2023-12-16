import { FC, PropsWithChildren } from 'react';

interface ButtonProps {
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, color, onClick, disabled }) => {
  return (
    <button
      className={`${!disabled && 'font-bold'}`}
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
