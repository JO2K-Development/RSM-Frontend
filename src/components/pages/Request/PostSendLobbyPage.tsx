import BottomHome from '../../common/BottomHome';

const PostSendLobbyPage = () => {
  return (
    <div className="request-page-bg  relative flex  h-screen w-full flex-col items-center justify-center">
      <div className="rounded-xl bg-neutral-700/50 p-[1rem] text-center text-white ">
        <h1 className="text-xl ">Thank you for choosing our services!</h1>
        <p className="text-base">
          You need to confirm the request by clicking on the{' '}
          <span className="font-bold underline">link in the email</span>
        </p>
      </div>

      <BottomHome />
    </div>
  );
};

export default PostSendLobbyPage;
