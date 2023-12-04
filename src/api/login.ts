import path from "./vars";
export interface Login {
  email: string;
  password: string;
}

const login = (login: Login) =>
  fetch(`${path}/api/v1/auth/login`, {
    method: "POST",

    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(login),
  });
export default login;
