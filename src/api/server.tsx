// api
import { instance } from '.';
// constants
import { ServerType } from '../types/login.types';

export type ApiClient = {
  getServers: () => Promise<ServerType[]>;
};

export const createServers = (): ApiClient => {
  return {
    getServers: async () => {
      try {
        const response = await instance().get(`servers`);
        return response.data;
      } catch (error: any) {
        console.log(error?.response);
        throw Error(error?.response?.data?.message || 'Something went wrong');
      }
    },
  };
};
