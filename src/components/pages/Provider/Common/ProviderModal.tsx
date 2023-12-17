import { FC, PropsWithChildren } from 'react';

interface ProviderModalProps {}

const ProviderModal: FC<PropsWithChildren<ProviderModalProps>> = ({ children }) => {
  return (
    <div className="fixed z-[998] flex     h-screen w-full flex-col items-center justify-center  backdrop-blur-lg duration-300">
      {children}
    </div>
  );
};

export default ProviderModal;
