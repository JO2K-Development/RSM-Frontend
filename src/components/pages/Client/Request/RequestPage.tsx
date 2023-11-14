import LinkButton from "../../../common/LinkButton";
import GeneralForm from "./GeneralForm";

const RequestPage = () => {
  return (
    <div>
      Send request! <LinkButton goTo="/home" text="home" />
      <br />
      <GeneralForm />
    </div>
  );
};

export default RequestPage;
