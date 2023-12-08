import path from "./vars";




const pairRequest = (token:string,providerId:string,requestId:string) => {
    console.log("pair",token,providerId,requestId);
    return fetch(`${path}/api/v1/request/pair/${requestId}?provider_id=${providerId}`, {
      method: "PUT",
      headers: {
        // "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  };
  export default pairRequest;
  