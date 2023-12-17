interface ProviderButtonProps {
  onClick(): void;
}

const ProviderButton: React.FC<ProviderButtonProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center text-sm text-gray-500">
      <p>
        {' '}
        Are you a provider?{' '}
        <span
          className="cursor-pointer font-bold underline"
          onClick={() => {
            onClick();
          }}
        >
          click here
        </span>
      </p>
    </div>
  );
};

export default ProviderButton;
