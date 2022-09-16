// libraries
import axios from 'axios';
// constants
import { LoginBodyType, LoginResponseType } from '../types/login.types';

export type ApiClient = {
  login: (body: LoginBodyType) => Promise<LoginResponseType>;
  getServers: () => Promise<LoginResponseType>;
};

const instance = (token?: string) =>
  axios.create({
    baseURL: 'https://playground.tesonet.lt/v1/',
    timeout: 1000,
    headers: { Authorization: token || '' },
  });

export const createApiLoginClient = (token?: string): ApiClient => {
  return {
    login: async (body: LoginBodyType) => {
      try {
        const response = await instance().post(`tokens`, { ...body });
        return response.data;
      } catch (error: any) {
        throw Error(error?.response?.data?.message);
      }
    },

    getServers: async () => {
      try {
        const response = await instance(token).get(`servers`);
        return response.data;
      } catch (error: any) {
        throw Error(error?.response?.data?.message);
      }
    },
  };
};
