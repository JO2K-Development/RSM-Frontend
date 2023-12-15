import path from './vars';
const updateRequest = (token: string, requestId: string, form: any) => {
  return fetch(`${path}/api/v1/request/update-status/${requestId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(form)
  });
};
export default updateRequest;
