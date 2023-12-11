import { IoHome } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  ProviderAuthState,
  logout,
} from "../../../redux/slices/ProviderAuthSlice";
import { Store } from "../../../redux/store";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { token, loading } = useSelector<Store, ProviderAuthState>(
    (state) => state.providerAuth
  );
  const dispatch = useDispatch();

  return (
    <div className="lg:h-[5%] bg-neutral-200  w-full   mt-0 flex pl-[1rem] relative items-center text-[1.5rem] gap-[1.5rem]">
      <Link className="hover:scale-95 duration-300 " to={`/provider/${token}`}>
        <IoHome />
      </Link>
      <Link
        className="hover:scale-95 duration-300 "
        to={`/provider/${token}/account`}
      >
        <div>Account</div>
      </Link>
      <Link
        className="hover:scale-95 duration-300 "
        to={`/provider/${token}/your-requests`}
      >
        <div>Your Requests</div>
      </Link>
      <Link
        className="hover:scale-95 duration-300 "
        to={`/provider/${token}/statistics`}
      >
        <div>Statistics</div>
      </Link>
      <div className="ml-auto mr-[2rem]" onClick={() => dispatch(logout())}>
        Logout
      </div>
    </div>
  );
};

export default Navbar;
