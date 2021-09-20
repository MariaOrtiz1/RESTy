export const fetchRestyApi = (url, method, body) => {
  
  if(method === 'GET' || method === 'DELETE') {
    return fetch(url).then((res) => res.json());
  }

  return fetch(url, { method, headers: {
    'Content-Type': 'application/json' },
  body,
  }).then((res) => res.json());
};
