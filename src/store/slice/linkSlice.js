import { createSlice } from '@reduxjs/toolkit';
import {
  createShortLink,
  deleteShortLink,
  editShortLink,
} from '../actions/linkActions';
import { logoutUser } from '../actions/userActions';

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
      .addCase(logoutUser.fulfilled, (state) => {
        state.items = [];
      });
  },
  selectors: {
    selectLoading: (state) => state.loading,
    selectLinks: (state) => state.items,
  },
});

export const { selectLoading, selectLinks } = linkSlice.selectors;
export default linkSlice.reducer;
