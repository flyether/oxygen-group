import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

import { IError, IUser } from '../../models/interfaces';

// console.log('baseurl: ', process.env.REACT_APP_BASE_URL);

export const commonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,

    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }) as BaseQueryFn<
    string | FetchArgs,
    unknown,
    IError,
    Record<string, unknown>,
    FetchBaseQueryMeta
  >,

  endpoints: (build) => ({
    regUser: build.mutation<IUser, IUser>({
      query: (userInfo) => ({
        url: `/enquiries`,
        method: 'POST',
        body: userInfo,
      }),
    }),
  }),
});
