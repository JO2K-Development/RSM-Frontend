import { useState } from "react";
import { useNavigate } from "react-router-dom";
import requestSend from "../api/requestSend";
import allRequests from "../api/allRequests";
import { Request } from "../types/Request";
import { PersonalDataForm } from "../components/pages/Request/PersonalDataForm";
import { RepairFormData } from "../components/pages/Request/RepairDataForm";

function useRequestForm(pagesLength: number): {
  formState: Request;
  page: number;
  addToForm: (arg: object) => void;
  goBack: (arg: object) => void;
} {
  const [formState, setFormState] = useState<Request>({
   creator:{ firstName: "",
    lastName: "",
    phoneNumber: "",
    email: ""},
    carMake: "",
    carModel: "",
    message: "",
  });
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const addToForm = (arg:Object) => {
    setFormState({ ...formState, ...arg });
    if (page < pagesLength - 1) {
      setPage(page + 1);
    } else {

      requestSend({ ...formState,...arg }).then(arg=>{allRequests().then(data=>data.json()).then(data=>console.log(data))})
      console.log({ ...formState, ...arg })
      navigate("/home");
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
    goBack: goBack,
  };
}
export default useRequestForm;
