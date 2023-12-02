const getProviders = (email:string) => {
 

    return fetch(`http://localhost:8080/api/v1/provider/${email}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  };
  export default getProviders;