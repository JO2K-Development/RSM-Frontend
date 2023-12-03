const allRequests = (token: string) => {
  console.log(token);
  return fetch(`http://localhost:8080/api/v1/provider/not-assigned`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer  ${token}`,
    },
  });
};
export default allRequests;
