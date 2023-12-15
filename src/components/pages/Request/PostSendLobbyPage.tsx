import BottomHome from '../../common/BottomHome';

const PostSendLobbyPage = () => {
  return (
    <div className="request-page-bg  h-screen w-full  relative flex flex-col justify-center items-center">
      <div className="bg-neutral-700/50 p-[1rem] rounded-xl text-white text-center ">
        <h1 className="text-[2.4rem] ">Thank you for choosing our services!</h1>
        <p className="">
          You need to confirm the request by clicking on the{' '}
          <span className="underline font-bold">link in the email</span>
        </p>
      </div>

      <BottomHome />
    </div>
  );
};

export default PostSendLobbyPage;
