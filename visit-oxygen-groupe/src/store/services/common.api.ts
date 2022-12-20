import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

// import { RootState } from '../store';
import { IError } from '../../models/interfaces';

// TODO move to constants.
export const BASE_URL = 'https://pma-backend-2-0.onrender.com';

export const commonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  
  }) as BaseQueryFn<
    string | FetchArgs,
    unknown,
    IError,
    Record<string, unknown>,
    FetchBaseQueryMeta
  >,
  tagTypes: ['User' ],
  endpoints: (_) => ({}),
});
