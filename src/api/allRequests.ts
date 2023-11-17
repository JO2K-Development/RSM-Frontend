import { RequestForm } from "../components/pages/Request/RequestPage";

const allRequests = () => {
 

  return fetch(`http://localhost:8080/api/v1/request`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};
export default allRequests;
