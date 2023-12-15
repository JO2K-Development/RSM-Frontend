import PersonalDataForm from './RequestForm/PersonalDataForm';
import RepairDataForm from './RequestForm/RepairDataForm';
import useRequestForm from '../../../hooks/useRequestForm';
import BottomHome from '../../common/BottomHome';

const RequestPage = () => {
  const { formState, page, addToForm, goBack } = useRequestForm(2);
  const pages = [
    <PersonalDataForm
      addToForm={addToForm}
      defaultValues={formState}
    />,
    <RepairDataForm
      defaultValues={formState}
      addToForm={addToForm}
      goBack={goBack}
    />
  ];

  return (
    <div className="request-page-bg  h-screen w-full  relative">
      <div className="bg-black bg-opacity-60  h-screen w-full  flex flex-col justify-center items-center ">
        {pages[page]}
      </div>
      <BottomHome />
    </div>
  );
};

export default RequestPage;
