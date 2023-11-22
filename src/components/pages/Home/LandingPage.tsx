import FunctionalLandingPage from "./LandingPage/FunctionalLandingPage";
import EntryLandingPage from "./LandingPage/EntryLandingPage";
const LandingPage = () => {
  return (
    <div className="h-screen landing-page-bg text-white ">
      <EntryLandingPage />
      <FunctionalLandingPage />
    </div>
  );
};

export default LandingPage;
