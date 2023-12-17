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
    <div className="group fixed bottom-0 left-[50vw] z-[999] mt-[0.2rem]  flex   translate-x-[-50%]  gap-[0.8rem]  rounded-lg p-[1.2rem] text-[2rem]  text-white">
      <div className=" opacity/20 absolute right-1/2 top-0 flex h-full  w-full translate-x-1/2 flex-col items-center justify-center group-hover:hidden">
        <IoIosArrowUp className="  stroke-white stroke-[5] text-[20rem] text-slate-400  " />
      </div>

      <Link
        className=" aspect-square translate-y-full rounded-sm bg-neutral-700/80 p-[0.8rem] opacity-0  outline outline-white duration-300   hover:scale-105 active:scale-75   group-hover:translate-y-0 group-hover:opacity-100"
        to={`/provider/${token}`}
      >
        <IoHome />
      </Link>
      <Link
        className=" aspect-square translate-y-full rounded-sm bg-neutral-700/80 p-[0.8rem] opacity-0  outline outline-white duration-300   hover:scale-105 active:scale-75   group-hover:translate-y-0 group-hover:opacity-100 "
        to={`/provider/${token}/account`}
      >
        <RiAccountCircleLine />
      </Link>
      <Link
        className=" aspect-square translate-y-full rounded-sm bg-neutral-700/80 p-[0.8rem] opacity-0  outline outline-white duration-300   hover:scale-105 active:scale-75   group-hover:translate-y-0 group-hover:opacity-100 "
        to={`/provider/${token}/your-requests`}
      >
        <AiOutlineForm />
      </Link>
      <Link
        className=" aspect-square translate-y-full rounded-sm bg-neutral-700/80 p-[0.8rem] opacity-0  outline outline-white duration-300   hover:scale-105 active:scale-75   group-hover:translate-y-0 group-hover:opacity-100 "
        to={`/provider/${token}/statistics`}
      >
        <IoIosStats />
      </Link>

      <div
        onClick={() => dispatch(logout())}
        className=" aspect-square translate-y-full rounded-sm bg-neutral-700/80 p-[0.8rem] opacity-0  outline outline-white duration-300   hover:scale-105 active:scale-75   group-hover:translate-y-0 group-hover:opacity-100"
      >
        <IoMdLogOut />
      </div>
    </div>
  );
};

export default Navbar;
