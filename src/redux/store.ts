import { configureStore } from "@reduxjs/toolkit";
import ProviderAuthReducer, { ProviderAuthState } from "./slices/ProviderAuthReducer";
export const store= configureStore({ reducer: {
    providerAuth: ProviderAuthReducer,
} });

export interface Store{
    providerAuth:ProviderAuthState

}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch