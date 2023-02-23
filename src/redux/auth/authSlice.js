import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { registration, logIn, logOut, fetchCurrentUser } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

//////////////////////////////////////////////

const extraActions = [registration, logIn, logOut, fetchCurrentUser];

const getActions = type => extraActions.map(action => action[type]);

const handlePending = state => {
  state.auth.isLoading = true;
};

const handleFulfilled = state => {
  state.auth.isLoading = false;
  state.auth.error = null;
};

const handleRejected = (state, { payload }) => {
  //   state.auth.isLoading = false;
  //   state.auth.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder

      .addCase(registration.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })

      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })

      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      })

      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected),
});

export const authReducer = authSlice.reducer;