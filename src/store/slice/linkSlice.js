import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../config';

export const createShortLink = createAsyncThunk(
  'links/createShortLink',
  async (url) => {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
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
    const response = await fetch(`${API_BASE_URL}/${urlId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    return {
      ok: response.ok,
    };
  }
);

const initialState = {
  items: [],
  loading: 'idle',
};

const linkSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createShortLink.rejected, (state) => {
        state.loading = 'rejected';
      })
      .addCase(createShortLink.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(createShortLink.fulfilled, (state, action) => {
        const { ok, result } = action.payload;

        if (ok) {
          state.items.push(result);
          state.loading = 'idle';
        } else {
          state.loading = 'error';
        }
      })
      .addCase(deleteShortLink.fulfilled, (state, action) => {
        const { ok } = action.payload;
        const id = action.meta.arg;

        if (ok) {
          const idx = state.items.findIndex((item) => item.id === id);
          state.items.splice(idx, 1);
        }
      });
  },
  selectors: {
    selectLoading: (state) => state.loading,
    selectLinks: (state) => state.items,
  },
});

export const { selectLoading, selectLinks } = linkSlice.selectors;
export default linkSlice.reducer;
