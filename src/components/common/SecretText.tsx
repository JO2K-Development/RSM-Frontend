interface ProviderButtonProps {
  onClick(): void;
  text: string;
}

const SecretText: React.FC<ProviderButtonProps> = ({ onClick, text }) => {
  return (
    <div className="flex justify-center text-sm text-gray-500">
      <p>
        {' '}
        {text}
        <span
          className="cursor-pointer font-bold underline"
          onClick={onClick}
        >
          click here
        </span>
      </p>
    </div>
  );
};

export default SecretText;
