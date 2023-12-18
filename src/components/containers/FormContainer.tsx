import FlexCenterContainer from './FlexCenterContainer';

interface FormContainerProps {
  children: JSX.Element[] | JSX.Element;
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}

const FormContainer: React.FC<FormContainerProps> = ({ children, handleSubmit }) => {
  return (
    <FlexCenterContainer>
      <form onSubmit={handleSubmit}>
        <div className="relative flex flex-col items-stretch gap-[1rem] text-base">{children}</div>
      </form>
    </FlexCenterContainer>
  );
};

export default FormContainer;
