import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { authApi } from './authApi';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      avatarURL: null,
      id: null,
    },
    token: null,
    isLoggedIn: false,
  },
  reducers: {
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state, action) => {
          state.user.email = action.payload.email;
          state.user.name = action.payload.name;
          state.user.id = action.payload.id;
          state.user.avatarURL = action.payload.avatarURL;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.user.id = action.payload.id;
        state.user.avatarURL = action.payload.avatarURL;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
          avatarURL: null,
          id: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

const persisteAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const { logOut } = authSlice.actions;
export default persisteAuthReducer;
