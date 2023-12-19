import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestSend from '../api/requestSend';
import {
  RequestDetailsFromUser,
  RequestPersonalData,
  RequestWithoutBackend
} from '../types/Request';

function useRequestForm(pagesLength: number): {
  formState: RequestWithoutBackend;
  page: number;
  addToForm: (arg: RequestDetailsFromUser | RequestPersonalData) => void;
  goBack: (arg: RequestDetailsFromUser | RequestPersonalData) => void;
} {
  const [formState, setFormState] = useState<RequestWithoutBackend>({
    creator: { firstName: '', lastName: '', phoneNumber: '', email: '' },
    carMake: '',
    carModel: '',
    carYear: null,
    message: '',
    licencePlateNumber: ''
  });
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const addToForm = (arg: RequestDetailsFromUser | RequestPersonalData) => {
    // console.log(formState);
    setFormState({ ...formState, ...arg });
    if (page < pagesLength - 1) {
      setPage(page + 1);
    } else {
      requestSend({ ...formState, ...arg }).then((arg) => {
        navigate('/request/sent');
      });
    }
  };
  const goBack = (arg: RequestDetailsFromUser | RequestPersonalData) => {
    setFormState({ ...formState, ...arg });
    setPage(page - 1);
  };

  return {
    formState: formState,
    page: page,
    addToForm: addToForm,
    goBack: goBack
  };
}
export default useRequestForm;
