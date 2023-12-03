const getProviders = (email:string,token:string) => {
    console.log("getProvider",token)  
  return fetch(`http://localhost:8080/api/v1/provider/getbyemail/${email}`, {
      method: "GET",
      headers: { 
                  "Content-Type": "application/json",
                  "Authorization": `Bearer  ${token}`
                
                },
    });
  };
  export default getProviders;