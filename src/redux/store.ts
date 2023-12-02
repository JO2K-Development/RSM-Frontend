import { configureStore } from "@reduxjs/toolkit";
import ProviderAuthSlice, { ProviderAuthState } from "./slices/ProviderAuthSlice";
import ProviderInfoSlice, { ProviderInfoState } from "./slices/ProviderInfoSlice";
export const store= configureStore({ reducer: {
    providerAuth: ProviderAuthSlice,
    providerInfo: ProviderInfoSlice
} });

export interface Store{
    providerAuth:ProviderAuthState
    providerInfo:ProviderInfoState

}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch