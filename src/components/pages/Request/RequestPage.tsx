import LinkButton from "../../common/LinkButton";
import PersonalDataForm, { PersonalFormDataState } from "./PersonalDataForm";
import RepairDataForm, { RepairFormData } from "./RepairDataForm";
import useRequestForm from "../../../hooks/useRequestForm";

export interface wholeForm  extends PersonalFormDataState,RepairFormData{}

const RequestPage = () => {
  const {formState,page,addToForm,goBack}=useRequestForm(2)  
  const pages=[<PersonalDataForm addToForm={addToForm} defaultValues={formState} />,<RepairDataForm defaultValues={formState}  addToForm={addToForm} goBack={ goBack} />]


  
  return (
    <div  className='request-page-bg  h-screen w-full  relative'>
      <div  className="bg-black bg-opacity-60  h-screen w-full  flex flex-col justify-center items-center ">
        <div className='absolute r-0 t-0 h-full'>
          <LinkButton goTo="/home" text="home" />
        </div>
        {pages[page]}
      </div>

    </div>
  );
};

export default RequestPage;
