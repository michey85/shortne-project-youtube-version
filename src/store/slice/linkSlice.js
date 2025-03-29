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
          const item = {
            originalLink: action.meta.arg,
            shortLink: result,
          };
          state.items.push(item);
          state.loading = 'idle';
        } else {
          state.loading = 'error';
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
