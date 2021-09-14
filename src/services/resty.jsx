export const fetchApi = async (url, method, JSON) => {
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    JSON
  });

  const json = await res.json();
  const stringyJson = JSON.stringify(json);

  return stringyJson;
};
