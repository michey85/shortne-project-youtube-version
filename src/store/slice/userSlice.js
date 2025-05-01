import { createSlice } from '@reduxjs/toolkit';
import { createUser, loginUser, logoutUser } from '../actions/userActions';

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
        const { ok, result } = action.payload;
        if (!ok) {
          state.loading = 'error';
          state.error = result.message;
          state.user = null;
          return;
        }

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
