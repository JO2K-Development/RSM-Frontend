import { FC, PropsWithChildren } from 'react';

interface ProviderModalProps {}

const ProviderModal: FC<PropsWithChildren<ProviderModalProps>> = ({ children }) => {
  return (
    <div className="fixed h-screen w-full   z-[998] flex flex-col justify-center items-center">
      <div>{children}</div>
    </div>
  );
};

export default ProviderModal;
