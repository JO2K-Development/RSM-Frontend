import FunctionalLandingPage from './LandingPage/FunctionalLandingPage';
import EntryLandingPage from './LandingPage/EntryLandingPage';
const LandingPage = () => {
  return (
    <div className="landing-page-bg h-screen text-white ">
      <EntryLandingPage />
      <FunctionalLandingPage />
    </div>
  );
};

export default LandingPage;
