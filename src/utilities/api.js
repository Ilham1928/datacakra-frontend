import { toast } from './toast';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

async function request(url, options = {}) {
  const token = localStorage.getItem('token');

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  const headers = {
    ...(options.body && { 'Content-Type': 'application/json' }),
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers,
      signal: controller.signal, // ✅ FIX DI SINI
    });

    clearTimeout(timeoutId);

    let data = null;
    try {
      data = await res.json();
    } catch {
      //
    }

    if (!res.ok) {
      if (res.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }

      const errorObj = data?.error;

      let detail = null;

      if (Array.isArray(errorObj)) {
        detail = errorObj.join(', ');
      } else if (typeof errorObj === 'object' && errorObj !== null) {
        detail = Object.values(errorObj).join(', ');
      } else {
        detail = errorObj;
      }

      const error = {
        status: res.status,
        message: data?.message || 'Something went wrong',
        detail,
      };

      // kirim ke toast
      toast.emit({
        title: error.message,
        detail: error.detail,
      });
    }

    return data;
  } catch (err) {
    clearTimeout(timeoutId);

    if (err.name === 'AbortError') {
      throw {
        status: 408,
        message: 'Request timeout (server terlalu lama merespon)',
      };
    }

    throw err;
  }
}

export const api = {
  get: (url) => request(url),

  post: (url, data) =>
    request(url, {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  patch: (url, data) =>
    request(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),

  delete: (url) =>
    request(url, {
      method: 'DELETE',
    }),
};