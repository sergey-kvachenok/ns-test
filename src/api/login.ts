// api
import { instance } from '.';
// constants
import { LoginBodyType, LoginResponseType } from '../types/login.types';

export type ApiClient = {
  login: (body: LoginBodyType) => Promise<LoginResponseType>;
};

export const createApiLoginClient = (): ApiClient => {
  return {
    login: async (body: LoginBodyType) => {
      try {
        const response = await instance().post(`tokens`, { ...body });
        return response.data;
      } catch (error: any) {
        throw Error(error?.response?.data?.message);
      }
    },
  };
};
