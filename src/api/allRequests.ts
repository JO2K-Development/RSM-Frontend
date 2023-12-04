import path from "./vars";
const allRequests = () => {
 

  return fetch(`${path}/api/v1/request`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};
export default allRequests;
