import { configureStore } from "@reduxjs/toolkit";
import ProviderAuthSlice, { ProviderAuthState } from "./slices/ProviderAuthSlice";
export const store= configureStore({ reducer: {
    providerAuth: ProviderAuthSlice,
} });

export interface Store{
    providerAuth:ProviderAuthState

}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch