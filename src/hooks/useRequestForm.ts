import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestSend from '../api/requestSend';
import RequestType from '../types/Request';

function useRequestForm(pagesLength: number): {
  formState: RequestType;
  page: number;
  addToForm: (arg: object) => void;
  goBack: (arg: object) => void;
} {
  const [formState, setFormState] = useState<RequestType>({
    creator: { firstName: '', lastName: '', phoneNumber: '', email: '' },
    carMake: '',
    carModel: '',
    message: ''
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
