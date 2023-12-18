import { FC, PropsWithChildren } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

interface NavbarContainerProps {}

const NavbarContainer: FC<PropsWithChildren<NavbarContainerProps>> = ({ children }) => {
  return (
    <div className="group fixed bottom-0 left-[50vw] z-[999] mt-[0.2rem]  flex   translate-x-[-50%]  gap-[0.8rem]  rounded-lg p-[1.2rem] text-[2rem]  text-white">
      <div className=" opacity/20 absolute right-1/2 top-0 flex h-full  w-full translate-x-1/2 flex-col items-center justify-center group-hover:hidden">
        <IoIosArrowUp className="  stroke-white stroke-[5] text-[20rem] text-slate-400  " />
      </div>
      <div className="flex translate-y-full gap-[0.8rem] opacity-0 duration-200 group-hover:translate-y-0 group-hover:opacity-100 ">
        {children}
      </div>
    </div>
  );
};

export default NavbarContainer;
