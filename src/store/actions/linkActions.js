import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../config';

const BASE_URL = `${API_BASE_URL}/shortner`;

export const fetchShortLinks = createAsyncThunk(
  'links/fetchShortLinks',
  async () => {
    const response = await fetch(BASE_URL, {
      credentials: 'include',
    });
    const result = await response.json();
    return { ok: response.ok, result };
  }
);

export const createShortLink = createAsyncThunk(
  'links/createShortLink',
  async (url) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    const result = await response.json();
    return { ok: response.ok, result };
  }
);

export const editShortLink = createAsyncThunk(
  'links/editShortLink',
  async ({ url, id }) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    const result = await response.json();
    return { ok: response.ok, result };
  }
);

export const deleteShortLink = createAsyncThunk(
  'links/deleteShortLink',
  async (urlId) => {
    const response = await fetch(`${BASE_URL}/${urlId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });
    return {
      ok: response.ok,
    };
  }
);
