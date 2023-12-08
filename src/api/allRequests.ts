import path from "./vars";

const allRequests = (token: string) => {
  return fetch(`${path}/api/v1/provider/notassigned`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });
};
export default allRequests;
