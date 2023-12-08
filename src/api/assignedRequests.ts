import path from "./vars";

const assignedRequests = (token: string,email:string) => {
    console.log(email)
  return fetch(`${path}/api/v1/provider/assigned/${email}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });
};
export default assignedRequests;
