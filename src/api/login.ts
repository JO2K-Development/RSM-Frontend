
export interface Login {
  email: string;
  password: string;
}

const login = (login: Login) =>
  fetch(`http://localhost:8080/api/v1/auth/login`, {
    mode: "no-cors",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(login),
  })
    .then((response) => {
      // Handle the response here if needed
      console.log(response)
    }).then((arg)=>{console.log(arg)})
    .catch((error) => {
      // Handle errors here
      console.error("Error:", error);
    });

export default login;
