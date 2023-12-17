import { FC, PropsWithChildren } from 'react';

interface ProviderModalProps {}

const ProviderModal: FC<PropsWithChildren<ProviderModalProps>> = ({ children }) => {
  return (
    <div className="fixed h-screen w-full     z-[998] flex flex-col justify-center items-center  backdrop-blur-lg duration-300">
      {children}
    </div>
  );
};

export default ProviderModal;
