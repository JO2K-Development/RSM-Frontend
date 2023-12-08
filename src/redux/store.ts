import { configureStore } from "@reduxjs/toolkit";
import ProviderAuthSlice, { ProviderAuthState } from "./slices/ProviderAuthSlice";
import ProviderInfoSlice, { ProviderInfoState } from "./slices/ProviderInfoSlice";
import RequestsSlice, { RequestsSliceState } from "./slices/RequestsSlice";
export const store= configureStore({ reducer: {
    providerAuth: ProviderAuthSlice,
    providerInfo: ProviderInfoSlice,
    requests:RequestsSlice
} });

export interface Store{
    providerAuth:ProviderAuthState
    providerInfo:ProviderInfoState
    requests:RequestsSliceState

}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch