import { RequestWithoutBackend } from '../types/Request';
import path from './vars';
const requestSend = (form: RequestWithoutBackend) => {
  return fetch(`${path}/api/v1/request`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  });
};
export default requestSend;
