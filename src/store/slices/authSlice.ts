// libraries
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      const token = action.payload;

      state.token = token;
    },

    clearToken: state => {
      state.token = '';
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
