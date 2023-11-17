import { useState } from "react";
import { wholeForm } from "../components/pages/Request/RequestPage";
import { useNavigate } from "react-router-dom";

function useRequestForm(pagesLength:number):{formState:wholeForm,page:number,addToForm:(arg:object)=>void,goBack:(arg:object)=>void}{
    
const [formState,setFormState]=useState<wholeForm>({firstName:"",lastName:"",phoneNumber:"",email:"",carMake:"",carModel:"",message:""})
const [page,setPage]=useState(0);
const navigate=useNavigate()

const addToForm=(arg:Object)=>{
    setFormState({...formState,...arg})
    if (page<pagesLength-1){
      setPage(page+1)
    }
    else{
     navigate('/home')
    }
  }
  const goBack=(arg:Object)=>{
    setFormState({...formState,...arg})
    setPage(page-1)}


    return  {
        formState:formState,
        page:page,
        addToForm:addToForm,
        goBack:goBack
    }
}
export default useRequestForm;







