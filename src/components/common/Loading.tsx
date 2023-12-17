import { Bars, ColorRing } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className=" flex h-full flex-col items-center justify-center ">
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
