import { IoHome } from 'react-icons/io5';
import LinkButton from './LinkButton';

const BottomHome = () => {
  return (
    <div className=" absolute  bottom-0 right-[50%] z-50 mb-[2rem] translate-x-[50%] text-[3rem] text-white opacity-90 duration-300 hover:translate-y-[-50%] hover:rotate-[360deg] hover:scale-[1.7] hover:text-red-200 ">
      <LinkButton
        goTo="/home"
        icon={<IoHome />}
      />
    </div>
  );
};

export default BottomHome;
