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
    const { shortUrl } = await response.json();
    return { ok: response.ok, result: shortUrl };
  }
);

const initialState = {
  items: [],
  loading: 'idle',
};

const linkSlice = createSlice({
  name: 'links',
  initialState,
  extraReducers: {
    [createShortLink.rejected]: (state) => {
      state.loading = 'rejected';
    },
    [createShortLink.pending]: (state) => {
      state.loading = 'loading';
    },
    [createShortLink.fulfilled]: (state, action) => {
      const { ok, result } = action.payload;

      if (ok) {
        const item = {
          originalLink: action.meta.arg,
          shortLink: result,
        };
        state.items.push(item);
        state.loading = 'idle';
      } else {
        state.loading = 'error';
      }
    },
  },
});

export const selectLoading = (state) => state.links.loading;
export const selectLinks = (state) => state.links.items;
export default linkSlice.reducer;
