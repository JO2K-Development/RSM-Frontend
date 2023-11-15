import { useSelector } from "react-redux";
import LinkButton from "../../common/LinkButton";
import LoginPage from "./LoginPage";
import { Store } from "../../../redux/store";
import login from "../../../api/login";

const ProviderMainPage = () => {
    const isLogged=useSelector<Store>(state=>state.providerAuth)
    console.log(isLogged)
    return ( <div><LoginPage login={(arg)=>{console.log(JSON.stringify(arg));login(arg)}}/> <LinkButton goTo="/home" text="home"/>
    </div> );
}
 
export default ProviderMainPage;