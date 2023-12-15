import { configureStore } from '@reduxjs/toolkit';
import ProviderAuthSlice, { ProviderAuthState } from './slices/ProviderAuthSlice';
import ProviderInfoSlice, { ProviderInfoState } from './slices/ProviderInfoSlice';
import RequestsSlice, { RequestsSliceState } from './slices/RequestsSlice';
import { myAsyncThunkListenerMiddleware } from './middleware';
export const store = configureStore({
  reducer: {
    providerAuth: ProviderAuthSlice,
    providerInfo: ProviderInfoSlice,
    requests: RequestsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myAsyncThunkListenerMiddleware)
});

export interface Store {
  providerAuth: ProviderAuthState;
  providerInfo: ProviderInfoState;
  requests: RequestsSliceState;
}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
