import { FC, PropsWithChildren } from 'react';
import PageLayout from '../../../containers/PageLayout';
import FlexCenterContainer from '../../../containers/FlexCenterContainer';

interface ProviderModalProps {}

const ProviderModal: FC<PropsWithChildren<ProviderModalProps>> = ({ children }) => {
  return (
    <PageLayout className="fixed z-[998] w-full backdrop-blur-lg duration-300">
      <FlexCenterContainer>{children}</FlexCenterContainer>
    </PageLayout>
  );
};

export default ProviderModal;
