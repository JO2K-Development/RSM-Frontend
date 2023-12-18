import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestSend from '../api/requestSend';
import RequestWithBackend, { RequestWithoutBackend } from '../types/Request';

function useRequestForm(pagesLength: number): {
  formState: RequestWithBackend;
  page: number;
  addToForm: (arg: object) => void;
  goBack: (arg: object) => void;
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

  const addToForm = (arg: Object) => {
    console.log(formState);
    setFormState({ ...formState, ...arg });
    if (page < pagesLength - 1) {
      setPage(page + 1);
    } else {
      console.log(formState);
      requestSend({ ...formState, ...arg }).then((arg) => {
        navigate('/request/sent');
      });
    }
  };
  const goBack = (arg: Object) => {
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
