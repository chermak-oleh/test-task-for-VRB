/* eslint-disable import/no-cycle */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */

export function request<T>(
  url: string,
  topic: string,
  method = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };
  const BASE_URL = `https://newsapi.org/v2/everything?q=${topic}&pageSize=10&apiKey=4a49838392ba45afa9771191dbb41ad3`;

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return fetch(BASE_URL + url, options)
    .then(response => response.json());
}

export const client = {
  get: <T>(url: string, topic: string) => request<T>(url, topic),
};
