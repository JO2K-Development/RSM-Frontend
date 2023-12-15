import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestType } from '../../types/Request';
import notassignedRequests from '../../api/notassignedRequests';
import assignedRequests from '../../api/assignedRequests';

export const getRequests = createAsyncThunk(
  'getRequests',
  async ({
    token,
    email
  }: {
    token: string;
    email: string;
  }): Promise<Array<Array<RequestType>>> => {
    const requests = [
      notassignedRequests(token).then((data) => data.json()),
      assignedRequests(token, email).then((data) => data.json())
    ];
    const response = await Promise.all(requests);
    return response;
  }
);

export interface RequestsSliceState {
  assignedRequests: Array<RequestType>;
  unassignedRequests: Array<RequestType>;
  loading: boolean;
}

const initialState: RequestsSliceState = {
  assignedRequests: [],
  unassignedRequests: [],
  loading: false
};

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    clearState: (state) => {
      state.assignedRequests = [];
      state.unassignedRequests = [];
      state.loading = false;
    }
  },
  extraReducers(builder) {
    builder.addCase(getRequests.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getRequests.fulfilled, (state, action) => {
      state.loading = false;
      state.unassignedRequests = action.payload[0];
      state.assignedRequests = action.payload[1];
    });
    builder.addCase(getRequests.rejected, (state, action) => {
      state.assignedRequests = [];
      state.unassignedRequests = [];

      state.loading = false;
    });
  }
});

export const { clearState } = requestsSlice.actions;
export default requestsSlice.reducer;
