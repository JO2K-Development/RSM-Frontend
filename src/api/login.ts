export interface Login {
  email: string;
  password: string;
}

const login = (login: Login) =>
  fetch(`http://localhost:8080/api/v1/auth/login`, {
    method: "POST",

    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(login),
  });
export default login;
