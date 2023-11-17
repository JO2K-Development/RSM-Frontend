interface FormContainerProps {
  children: JSX.Element[] | JSX.Element;
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}

const FormContainer: React.FC<FormContainerProps> = ({
  children,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-[1rem] flex-col items-stretch">{children} </div>
    </form>
  );
};

export default FormContainer;
