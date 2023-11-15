import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';




// export const loginProvider=createAsyncThunk()

export interface ProviderAuthState {
  token:string | null;
  email:string
}

const initialState: ProviderAuthState = {
  token: null,
  email: "",
};

const ProviderAuthReducer = createSlice({
  name: 'providerAuth',
  initialState,
  reducers: {
  },
});


export default ProviderAuthReducer.reducer;
