import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

import { IError, IUser } from '../../models/interfaces';

// TODO move to constants.
export const BASE_URL = 'http://exemple.com';

export const commonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set('Authorization', 'Content-Type')
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
    regUser: build.mutation< IUser, IUser>({
      query: (userInfo) => ({
        url: `/api/users`,
        method: 'POST',
        body: userInfo,
      }),
    }),
  }),
});
