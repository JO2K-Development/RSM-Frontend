import { useForm } from 'react-hook-form';
import FormInput from '../../common/FormInput';
import { ProviderAuthState, loginProvider } from '../../../redux/slices/ProviderAuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, Store } from '../../../redux/store';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import FormContainer from '../../containers/FormContainer';
import FormButton from '../Request/RequestForm/FormButton';
import FormTitle from '../Request/RequestForm/FormTitle';
import { InfinitySpin } from 'react-loader-spinner';
import NavbarContainer from '../../containers/NavbarContainer';
import { IoHome } from 'react-icons/io5';
import NavbarIcon from '../../common/NavbarIcon';

const LoginPage = () => {
  const { token, loading, email } = useSelector<Store, ProviderAuthState>(
    (state) => state.providerAuth
  );
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    dispatch(loginProvider(data)).then((arg) => {
      reset();
      if (arg.meta.requestStatus === 'fulfilled')
        if ((arg.payload as { token: string }).token)
          navigate(`/provider/${(arg.payload as { token: string }).token}`);
    });
  };

  return token ? (
    <Navigate to={`/provider/${token}`} />
  ) : (
    <div className="request-page-bg  relative h-screen  w-full overflow-hidden">
      <div className="flex h-screen  w-full flex-col  items-center justify-center bg-black bg-opacity-60 ">
        <FormContainer handleSubmit={handleSubmit(onSubmit)}>
          <FormTitle title="Please enter your login  information" />
          <FormInput
            type="text"
            placeholder="email"
            rest={register('email', { required: true, maxLength: 80 })}
          />
          <FormInput
            type="password"
            placeholder="password"
            rest={register('password', { required: true, maxLength: 80 })}
          />
          <FormButton
            text="Login"
            onClick={() => {}}
            type="submit"
          />

          <div
            className={`absolute flex  h-full w-full scale-125 items-center justify-center rounded-3xl bg-black opacity-90 duration-[20ms]  ${
              !loading ? 'hidden  ' : ''
            }`}
          >
            <InfinitySpin
              width="200"
              color="red"
            />
          </div>
        </FormContainer>
      </div>
      <NavbarContainer>
        <NavbarIcon
          to="/home"
          icon={<IoHome />}
        />
      </NavbarContainer>
    </div>
  );
};

export default LoginPage;
