// libraries
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// constants
import { ServerType } from '../../types/login.types';
// api
import store from '..';

const baseUrl = 'https://playground.tesonet.lt/v1/';

export const serverApi = createApi({
  reducerPath: 'servers',
  refetchOnReconnect: true,
  tagTypes: ['Shows'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getServers: builder.query<ServerType[], void>({
      query: () => {
        const token: string = store.getState().auth.token;

        return {
          url: `servers`,
          headers: {
            Authorization: token,
            'content-type': 'application/json',
          },
        };
      },
      transformResponse: (response: ServerType[], meta) => {
        return response;
      },
    }),
  }),
});

export const { useGetServersQuery } = serverApi;
