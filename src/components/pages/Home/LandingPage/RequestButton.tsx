interface RequestButtonProps {
  onClick(): void;
}

const RequestButton: React.FC<RequestButtonProps> = ({ onClick }) => {
  return (
    <div
      className="my-[1rem] cursor-pointer rounded-xl bg-green-800 bg-opacity-70 p-[2rem] text-lg"
      onClick={() => {
        onClick();
      }}
    >
      Submit a request!
    </div>
  );
};

export default RequestButton;
