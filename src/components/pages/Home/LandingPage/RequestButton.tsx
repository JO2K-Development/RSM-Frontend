interface RequestButtonProps {
  onClick(): void;
}

const RequestButton: React.FC<RequestButtonProps> = ({ onClick }) => {
  return (
    <div
      className="p-[2rem] bg-green-800 bg-opacity-70 my-[1rem] text-[2rem] rounded-xl cursor-pointer"
      onClick={() => {
        onClick();
      }}
    >
      Submit a request!
    </div>
  );
};

export default RequestButton;
