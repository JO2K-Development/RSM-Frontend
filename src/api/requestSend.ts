
const requestSend = (form:any) => {
 

  return fetch(`http://localhost:8080/api/v1/request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
};
export default requestSend;
