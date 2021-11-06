export class ApiError extends Error {
  constructor(url, status) {
    super(`'${url}' returned ${status}`);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
    this.name = 'ApiError';
    this.status = status;
  }
}

export async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new ApiError(url, res.status);
  const json = await res.json();
  return json;
}
