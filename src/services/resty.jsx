export const fetchRestyApi = (url, method, body) => {
  
  if(method === 'GET' || method === 'DELETE') {
    return fetch(url, { method });
  }

  return fetch(url, { method, headers: {
    'Content-Type': 'application/json' },
  body,
  });
};
