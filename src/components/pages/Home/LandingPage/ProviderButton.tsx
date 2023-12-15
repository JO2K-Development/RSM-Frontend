interface ProviderButtonProps {
  onClick(): void;
}

const ProviderButton: React.FC<ProviderButtonProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center text-gray-500">
      <p>
        {' '}
        Are you a provider?{' '}
        <span
          className="underline font-bold cursor-pointer"
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
