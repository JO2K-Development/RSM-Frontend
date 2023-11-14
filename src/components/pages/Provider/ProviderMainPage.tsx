import LinkButton from "../../common/LinkButton";
import LoginPage from "./LoginPage";

const ProviderMainPage = () => {
    return ( <div><LoginPage/> <LinkButton goTo="/home" text="home"/>
    </div> );
}
 
export default ProviderMainPage;