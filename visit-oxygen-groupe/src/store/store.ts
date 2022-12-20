import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { commonApi } from './services/common.api';
import userSlice from './slices/UserSlice';
import {setupListeners} from '@reduxjs/toolkit/query'
// export const store = configureStore({
//   reducer: {
//     user: userSlice,
//     [commonApi.reducerPath]: commonApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commonApi.middleware),
// });

export const store = configureStore({
  reducer: {
    [commonApi.reducerPath]: commonApi.reducer,
    user: userSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(commonApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
