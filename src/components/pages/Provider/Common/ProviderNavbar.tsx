import { IoHome } from 'react-icons/io5';
import { AiOutlineForm } from 'react-icons/ai';
import { RiAccountCircleLine } from 'react-icons/ri';
import { IoIosStats } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { ProviderAuthState, logout } from '../../../../redux/slices/ProviderAuthSlice';
import { Store } from '../../../../redux/store';
import { IoMdLogOut } from 'react-icons/io';
import NavbarContainer from '../../../containers/NavbarContainer';
import NavbarIcon from '../../../common/NavbarIcon';
interface NavbarProps {}

const ProviderNavbar: React.FC<NavbarProps> = () => {
  const { token, loading } = useSelector<Store, ProviderAuthState>((state) => state.providerAuth);
  const dispatch = useDispatch();

  return (
    <NavbarContainer>
      <NavbarIcon
        to={`/provider/${token}`}
        icon={<IoHome />}
      />
      <NavbarIcon
        to={`/provider/${token}/your-requests`}
        icon={<AiOutlineForm />}
      />
      <NavbarIcon
        to={`/provider/${token}/account`}
        icon={<RiAccountCircleLine />}
      />

      <NavbarIcon
        disabled={true}
        // to={`/provider/${token}/statistics`}
        icon={<IoIosStats />}
      />
      <NavbarIcon
        handleOnClick={() => dispatch(logout())}
        icon={<IoMdLogOut />}
      />
    </NavbarContainer>
  );
};

export default ProviderNavbar;
