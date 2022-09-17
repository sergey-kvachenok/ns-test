// api
import { instance } from '.';
// store
import store from '../store';
// constants
import { ServerType } from '../types/login.types';

export type ApiClient = {
  getServers: () => Promise<ServerType[]>;
};

export const createServers = (): ApiClient => {
  // const token: string = store.getState().auth.token;
  console.log(store.getState());

  return {
    getServers: async () => {
      try {
        const response = await instance().get(`servers`);
        return response.data;
      } catch (error: any) {
        throw Error(error?.response?.data?.message);
      }
    },
  };
};
