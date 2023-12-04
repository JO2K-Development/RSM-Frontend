import path from "./vars";
const getProviders = (email:string) => {
 

    return fetch(`${path}/api/v1/provider/${email}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  };
  export default getProviders;