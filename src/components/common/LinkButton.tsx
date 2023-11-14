import { Link } from "react-router-dom";

interface LinkButtonProps {
  goTo: string;
  text?: string;
  icon?: JSX.Element;
}

const LinkButton: React.FC<LinkButtonProps> = ({ goTo, text, icon }) => {
  return (
    <Link to={goTo} className="underline">
      <div>
        <h1>{text}</h1>
        {icon}
      </div>
    </Link>
  );
};

export default LinkButton;
