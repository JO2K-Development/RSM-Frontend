
import { createAsyncThunk, createSlice,  } from '@reduxjs/toolkit';
import Provider from '../../types/Provider';
import getProvider from '../../api/getProvider';


export const getProviderInfo = createAsyncThunk(
    "getProvider/api",
    async ({email,token}:{email:string,token:string}): Promise<Object> => {
      const response = await getProvider(email,token);
      return response.json();
    }
  );

export interface ProviderInfoState {
 ProviderInfo: Provider|null;
 loading: boolean;
  
}


const initialState: ProviderInfoState = {
    ProviderInfo: null,
    loading: false
  };

const providerInfoSlice = createSlice({
  name: 'providerInfo',
  initialState,
  reducers: {
    clearState: (state) => {
      state.ProviderInfo = null;
    }
  },
  extraReducers(builder) {
    builder.addCase(getProviderInfo.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(getProviderInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.ProviderInfo = action.payload;
    })
    builder.addCase(getProviderInfo.rejected, (state, action) => {
      state.ProviderInfo = null;
      state.loading = false;
    })


  }
    
});

export const { clearState } = providerInfoSlice.actions;
export default providerInfoSlice.reducer;
