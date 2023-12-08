import path from "./vars";




const pairRequest = (token:string) => {
    console.log("cpari",token);
    return fetch(`${path}/api/v1/request/pair/f780c0d9-450c-429d-a9f7-6f535ed9005e?provider_id=8397d50b-063e-418e-80be-9d5bd146d8d3`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  };
  export default pairRequest;
  