import path from './vars';
const requestSend = (form: any) => {
  return fetch(`${path}/api/v1/request`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  });
};
export default requestSend;
