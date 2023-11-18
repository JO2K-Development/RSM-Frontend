import { IoHome } from "react-icons/io5";
import LinkButton from "./LinkButton";

const BottomHome = () => {
  return (
    <div className=" absolute  z-50 right-[50%] bottom-0 translate-x-[50%] mb-[2rem] text-[3rem] text-white hover:rotate-[360deg] hover:translate-y-[-50%] hover:scale-[1.7] hover:text-red-200 opacity-90 duration-300 ">
      <LinkButton goTo="/home" icon={<IoHome />} />
    </div>
  );
};

export default BottomHome;
