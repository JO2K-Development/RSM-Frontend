import User from "./User";

interface Provider extends User{
    password?:string;
}
export default Provider;