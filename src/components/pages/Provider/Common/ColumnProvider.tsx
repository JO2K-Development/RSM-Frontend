import { FC, PropsWithChildren } from 'react';

interface Props {
  title: string;
}
const ColumnProvider: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <div className="col-span-2   mx-[.5rem] flex    h-full min-h-0 flex-col rounded-xl bg-neutral-800/50 p-[1rem] text-white backdrop-blur-sm lg:col-span-1 ">
      <h1 className="p-[1rem] text-center text-xl font-bold">{title}</h1>
      <div className="h-full overflow-y-auto ">
        <div className="    flex flex-col gap-[1rem] pt-2    ">
          {children}
          <div className=" h-[5rem]" />
        </div>
      </div>
    </div>
  );
};

export default ColumnProvider;
