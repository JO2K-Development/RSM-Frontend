interface FormContainerProps {
  children: JSX.Element[] | JSX.Element;
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}

const FormContainer: React.FC<FormContainerProps> = ({ children, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative flex flex-col items-stretch gap-[1rem]">{children}</div>
    </form>
  );
};

export default FormContainer;
