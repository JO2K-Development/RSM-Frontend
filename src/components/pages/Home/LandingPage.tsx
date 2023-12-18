import FunctionalLandingPage from './LandingPage/FunctionalLandingPage';
import EntryLandingPage from './LandingPage/EntryLandingPage';
import PageLayout from '../../containers/PageLayout';
const LandingPage = () => {
  return (
    <PageLayout className="landing-page-bg">
      <EntryLandingPage />
      <FunctionalLandingPage />
    </PageLayout>
  );
};

export default LandingPage;
