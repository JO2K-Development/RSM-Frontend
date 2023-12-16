import { ReactNode, useState } from 'react';
import ProviderModal from '../components/pages/Provider/Common/ProviderModal';

export function useProviderModal(content?: ReactNode | undefined) {
  const [isModal, setIsModal] = useState(false);

  return {
    setIsModal: setIsModal,
    isModal: isModal,
    modal: isModal ? <ProviderModal>{content}</ProviderModal> : <></>
  };
}
