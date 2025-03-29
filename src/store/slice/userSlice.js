import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { API_BASE_URL } from '../../config';

const BASE_URL = `${API_BASE_URL}/users`;

export const createUser = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    return { ok: response.ok, result };
  }
);

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  const response = await fetch(`${BASE_URL}/logout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await response.json();
  return { ok: response.ok, result };
});

const initialState = {
  user: null,
  loading: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.user = action.payload.result;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.user = action.payload.result;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = 'idle';
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      });
  },
  selectors: {
    selectUser: (state) => state.user,
    selectUserLoading: (state) => state.loading,
    selectUserError: (state) => state.error,
  },
});

export const { selectUser, selectUserError, selectUserLoading } =
  userSlice.selectors;
export default userSlice.reducer;
