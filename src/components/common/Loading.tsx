import { Bars, ColorRing } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className=" h-full flex flex-col justify-center items-center ">
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
