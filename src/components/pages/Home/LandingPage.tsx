import FunctionalLandingPage from "./LandingPage/FunctionalLandingPage";
import EntryLandingPage from "./LandingPage/EntryLandingPage";
import allRequests from "../../../api/allRequests";

const LandingPage = () => {
  // console.log(allRequests().then(arg=>arg.json()).then(arg=>console.log(arg)))
  return (
    <div className="h-screen landing-page-bg text-white ">
      <EntryLandingPage />
      <FunctionalLandingPage />
    </div>
  );
};

export default LandingPage;
