import PageLayout from '../../containers/PageLayout';
import FormButton from '../../common/FormButton';
import SecretText from '../../common/SecretText';
import BrandHead from './BrandHead';
import { useNavigate } from 'react-router-dom';
import FlexCenterContainer from '../../containers/FlexCenterContainer';
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout className="landing-page-bg">
      <FlexCenterContainer className="bg-black/20">
        <BrandHead />

        <div className="p-[1rem] text-lg">
          <FormButton
            text={'Submit Request!'}
            onClick={() => {
              navigate('/request');
            }}
          />
        </div>
        <SecretText
          text={'Are you a provider?'}
          onClick={() => {
            navigate('/provider/login');
          }}
        />
      </FlexCenterContainer>
    </PageLayout>
  );
};

export default LandingPage;
