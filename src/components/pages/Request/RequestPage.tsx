import PersonalDataForm from './RequestForm/PersonalDataForm';
import RepairDataForm from './RequestForm/RepairDataForm';
import useRequestForm from '../../../hooks/useRequestForm';
import { Link } from 'react-router-dom';
import NavbarContainer from '../../containers/NavbarContainer';
import { IoHome } from 'react-icons/io5';
import NavbarIcon from '../../common/NavbarIcon';

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
    <div className="request-page-bg  relative h-screen  w-full">
      <div className="flex h-screen  w-full flex-col  items-center justify-center bg-black bg-opacity-60 ">
        {pages[page]}
      </div>
      <NavbarContainer>
        <NavbarIcon
          to="/home"
          icon={<IoHome />}
        />
      </NavbarContainer>
    </div>
  );
};

export default RequestPage;
