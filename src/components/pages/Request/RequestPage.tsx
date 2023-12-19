import PersonalDataForm from './RequestForm/PersonalDataForm';
import RepairDataForm from './RequestForm/RepairDataForm';
import useRequestForm from '../../../hooks/useRequestForm';
import NavbarContainer from '../../containers/NavbarContainer';
import { IoHome } from 'react-icons/io5';
import NavbarIcon from '../../common/NavbarIcon';
import PageLayout from '../../containers/PageLayout';
import FlexCenterContainer from '../../containers/FlexCenterContainer';

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
    <PageLayout className="request-page-bg text-black">
      <PageLayout className="bg-black   bg-opacity-80 ">
        <FlexCenterContainer>{pages[page]}</FlexCenterContainer>
      </PageLayout>

      <NavbarContainer>
        <NavbarIcon
          to="/home"
          icon={<IoHome />}
        />
      </NavbarContainer>
    </PageLayout>
  );
};

export default RequestPage;
