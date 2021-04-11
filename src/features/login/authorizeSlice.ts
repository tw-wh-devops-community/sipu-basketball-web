import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosBasicCredentials } from 'axios';
import { RootState } from '../../app/store';
import authorizeService from './service';

export interface LoginState {
  loading: boolean;
  error: string | undefined;
  isLogin: boolean;
  userName: string
}

export const initialState: LoginState = {
  loading: false,
  error: undefined,
  isLogin: false,
  userName: '李萌萌',
};

const doLogin = createAsyncThunk('authorize/doLogin', async (values: AxiosBasicCredentials) => {
  await authorizeService.login(values);
  return true;
});

export const authorizeActionCreators = { doLogin };

export const authorizeSlice = createSlice({
  name: 'authorize',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(doLogin.pending, (state) => {
        state.loading = true;
        state.error = undefined;
        state.isLogin = false;
      })
      .addCase(doLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.error = undefined;
        state.isLogin = action.payload;
      })
      .addCase(doLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isLogin = false;
      });
  },
});

export const selectLoginState = (state: RootState) => state.loginState;

export default authorizeSlice.reducer;
