import path from './vars';
const updateProvider = (token: string, providerId: string, form: any) => {
  return fetch(`${path}/api/v1/provider/${providerId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(form)
  });
};
export default updateProvider;
