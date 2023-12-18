import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IconProps {
  to?: string;
  icon: ReactNode;
  handleOnClick?(): void;
}

const NavbarIcon: FC<IconProps> = ({ to, icon, handleOnClick }) => {
  const iconContent = (
    <div
      onClick={() => handleOnClick && handleOnClick()}
      className="aspect-square rounded-sm bg-neutral-700/80 p-[0.8rem] outline outline-white duration-300 hover:scale-105 active:scale-75"
    >
      {icon}
    </div>
  );

  if (to) {
    return <Link to={to}>{iconContent}</Link>;
  }

  return iconContent;
};

export default NavbarIcon;
