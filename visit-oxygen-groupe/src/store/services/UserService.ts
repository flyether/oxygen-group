import { IUser } from '../../models/interfaces';
import { setId } from '../slices/UserSlice';
import { commonApi } from './common.api';

export const AuthorizationAPI = commonApi.injectEndpoints({
  endpoints: (build) => ({
    regUser: build.mutation<IUser, string>({
      query: (userInfo) => ({
        url: `/auth/signup`,
        method: 'POST',
        body: userInfo,
      }),
      async onQueryStarted({}, { dispatch, queryFulfilled }) {
        try {
          const resultID = await queryFulfilled;
          dispatch(setId(resultID.data._id));
        } catch (e) {
          console.error('userApi Registration error', e);
        }
      },
    }),
    
  }),
});
