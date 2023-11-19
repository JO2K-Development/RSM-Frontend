interface Props {
  children: JSX.Element[] | JSX.Element;
  title: string;
}
const ColumnProvider = ({ children, title }: Props) => {
  return (
    <div className="min-h-0 text-white flex-grow  bg-neutral-800/50 m-[0.5rem] p-[1rem] rounded-xl backdrop-blur-sm flex flex-col">
      <h1 className="text-center font-extrabold text-[2rem] p-[1rem]">{title}</h1>
      <div className=" flex-grow bg-black  overflow-y-auto grid gap-3 pt-2 ">{children}</div>
    </div>
  );
};

export default ColumnProvider;
