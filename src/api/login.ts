// libraries
import axios from 'axios';
// constants
import { LoginBodyType, LoginResponseType } from '../types/login.types';

const baseRoute = 'https://playground.tesonet.lt/v1';

export type ApiClient = {
  login: (body: LoginBodyType) => Promise<LoginResponseType>;
};

export const createApiLoginClient = (): ApiClient => {
  return {
    login: async (body: LoginBodyType) => {
      try {
        const response = await axios.post(`${baseRoute}/tokens`, { ...body });
        return response.data;
      } catch (error: any) {
        throw Error(error?.response?.data?.message);
      }
    },
  };
};
