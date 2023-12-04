import path from "./vars";

const allRequests = (token: string) => {
  console.log(token);
  return fetch(`${path}/api/v1/provider/not-assigned`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer  ${token}`,
    },
  });
};
export default allRequests;
