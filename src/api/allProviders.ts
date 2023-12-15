import path from './vars';
const allProviders = () => {
  return fetch(`${path}/api/v1/provider`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};
export default allProviders;
