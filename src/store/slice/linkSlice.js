import { createSlice } from '@reduxjs/toolkit';
import {
  createShortLink,
  deleteShortLink,
  editShortLink,
  fetchShortLinks,
} from '../actions/linkActions';
import { logoutUser } from '../actions/userActions';

const initialState = {
  items: [],
  loading: 'idle',
  error: null,
};

const linkSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createShortLink.rejected, (state, action) => {
        state.loading = 'rejected';
      })
      .addCase(createShortLink.pending, (state) => {
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(createShortLink.fulfilled, (state, action) => {
        const { ok, result } = action.payload;

        if (ok) {
          state.items.push(result);
          state.loading = 'idle';
        } else {
          state.loading = 'error';
          state.error = result.message;
        }
      })
      .addCase(editShortLink.fulfilled, (state, action) => {
        const { ok, result } = action.payload;
        const id = action.meta.arg.id;

        if (ok) {
          const idx = state.items.findIndex((item) => item.id === id);
          state.items[idx] = result;
        }
      })
      .addCase(deleteShortLink.fulfilled, (state, action) => {
        const { ok } = action.payload;
        const id = action.meta.arg;

        if (ok) {
          const idx = state.items.findIndex((item) => item.id === id);
          state.items.splice(idx, 1);
        }
      })
      .addCase(fetchShortLinks.fulfilled, (state, action) => {
        const { ok, result } = action.payload;

        if (ok) {
          state.items = result;
          state.loading = 'idle';
        } else {
          state.loading = 'error';
          state.error = result.message;
        }
      })
      .addCase(fetchShortLinks.pending, (state) => {
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(fetchShortLinks.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loading = 'idle';
      });
  },
  selectors: {
    selectLoading: (state) => state.loading,
    selectLinks: (state) => state.items,
    selectError: (state) => state.error,
  },
});

export const { selectLoading, selectLinks, selectError } = linkSlice.selectors;
export default linkSlice.reducer;
