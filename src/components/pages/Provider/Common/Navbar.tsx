import { IoHome } from 'react-icons/io5';
import { AiOutlineForm } from 'react-icons/ai';
import { RiAccountCircleLine } from 'react-icons/ri';
import { IoIosStats } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { ProviderAuthState, logout } from '../../../../redux/slices/ProviderAuthSlice';
import { Store } from '../../../../redux/store';
import { IoMdLogOut } from 'react-icons/io';
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { token, loading } = useSelector<Store, ProviderAuthState>((state) => state.providerAuth);
  const dispatch = useDispatch();

  return (
    <div className="flex fixed mt-[0.2rem] bottom-0 text-white z-10 bg-neutral-200/10 rounded-lg   text-[2rem]  gap-[0.8rem]  left-[50vw] translate-x-[-50%] group  p-[1.2rem]">
      <div className=" group-hover:hidden absolute right-1/2 translate-x-1/2 h-full  w-full top-0 flex flex-col justify-center items-center">
        <IoIosArrowUp className="text-[4rem]" />
      </div>

      <Link
        className=" bg-neutral-700/80 p-[0.8rem] translate-y-full group-hover:translate-y-0 opacity-0 rounded-sm  aspect-square outline outline-white   duration-300 hover:scale-105   active:scale-75 group-hover:opacity-100"
        to={`/provider/${token}`}
      >
        <IoHome />
      </Link>
      <Link
        className=" bg-neutral-700/80 p-[0.8rem] translate-y-full group-hover:translate-y-0 opacity-0 rounded-sm  aspect-square outline outline-white   duration-300 hover:scale-105   active:scale-75 group-hover:opacity-100 "
        to={`/provider/${token}/account`}
      >
        <RiAccountCircleLine />
      </Link>
      <Link
        className=" bg-neutral-700/80 p-[0.8rem] translate-y-full group-hover:translate-y-0 opacity-0 rounded-sm  aspect-square outline outline-white   duration-300 hover:scale-105   active:scale-75 group-hover:opacity-100 "
        to={`/provider/${token}/your-requests`}
      >
        <AiOutlineForm />
      </Link>
      <Link
        className=" bg-neutral-700/80 p-[0.8rem] translate-y-full group-hover:translate-y-0 opacity-0 rounded-sm  aspect-square outline outline-white   duration-300 hover:scale-105   active:scale-75 group-hover:opacity-100 "
        to={`/provider/${token}/statistics`}
      >
        <IoIosStats />
      </Link>

      <div
        onClick={() => dispatch(logout())}
        className=" bg-neutral-700/80 p-[0.8rem] translate-y-full group-hover:translate-y-0 opacity-0 rounded-sm  aspect-square outline outline-white   duration-300 hover:scale-105   active:scale-75 group-hover:opacity-100"
      >
        <IoMdLogOut />
      </div>
    </div>
  );
};

export default Navbar;
