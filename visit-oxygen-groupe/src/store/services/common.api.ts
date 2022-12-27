import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

import { IError, IUser, IСaptcha, IСaptchaRes } from '../../models/interfaces';

// TODO move to constants.
export const BASE_URL = 'http://localhost:5000';

export const commonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,

    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
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
        url: `/requests`,
        method: 'POST',
        body: userInfo,
      }),
    }),
    captcha: build.mutation< IСaptchaRes, IСaptcha>({
      query: (token) => ({
        url: `/captcha`,
        method: 'POST',
        body: token,
      }),
    }),
  }),
});
