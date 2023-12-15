import path from './vars';

const getProviders = (email: string, token: string) => {
  return fetch(`${path}/api/v1/provider/getbyemail/${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
};
export default getProviders;
