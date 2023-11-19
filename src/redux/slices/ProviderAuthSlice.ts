import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import login, { Login } from "../../api/login";

export const loginProvider = createAsyncThunk(
  "login/api",
  async (loginData: Login): Promise<Payload> => {
    const response = await login(loginData);
    return response.json();
  }
);

export interface ProviderAuthState {
  token: string | null;
  loading: boolean;
}
interface Payload {
  token: string;
}

const initialState: ProviderAuthState = {
  token: "ESSA",
  loading: false,
};

const ProviderAuthSlice = createSlice({
  name: "providerAuth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginProvider.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginProvider.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
    });
    builder.addCase(loginProvider.rejected, (state, action) => {
      state.token = null;
      state.loading = false;
    });
  },
});

export const { logout } = ProviderAuthSlice.actions;
export default ProviderAuthSlice.reducer;
