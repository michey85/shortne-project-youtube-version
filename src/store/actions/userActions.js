import { createAsyncThunk } from '@reduxjs/toolkit';

import { API_BASE_URL } from '../../config';

const BASE_URL = `${API_BASE_URL}/users`;

export const createUser = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const result = await response.json();
    return { ok: response.ok, result };
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const result = await response.json();

    return { ok: response.ok, result };
  }
);

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  const response = await fetch(`${BASE_URL}/logout`, {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await response.json();
  return { ok: response.ok, result };
});
