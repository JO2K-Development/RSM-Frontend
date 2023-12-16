import { FC, PropsWithChildren } from 'react';

interface Props {
  title: string;
}
const ColumnProvider: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <div className="min-h-0 text-white h-full    bg-neutral-800/50 m-[.5rem] p-[1rem] rounded-xl backdrop-blur-sm flex flex-col col-span-2 lg:col-span-1">
      <h1 className="text-center font-bold text-[2rem] p-[1rem]">{title}</h1>
      <div className="  overflow-y-auto flex flex-col gap-[1rem] pt-2 h-full  ">{children}</div>
    </div>
  );
};

export default ColumnProvider;
