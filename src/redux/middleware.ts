import { getProviderInfo } from "./slices/ProviderInfoSlice";
import { getRequests } from "./slices/RequestsSlice";
export const myAsyncThunkListenerMiddleware = (store:any) => (next:any) => (action:any) => {
    if (action.type === getProviderInfo.fulfilled.type) {
      store.dispatch(getRequests({token:action.meta.arg.token,email:action.payload.email}));
    }
  
    // Pass the action to the next middleware or reducer
    return next(action);
  };