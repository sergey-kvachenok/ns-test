// libraries
import axios from 'axios';
import store from '../store';

export const instance = () =>
  axios.create({
    baseURL: 'https://playground.tesonet.lt/v1/',
    timeout: 1000,
    headers: { Authorization: store.getState().auth.token || '' },
  });
