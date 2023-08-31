import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Issue } from "../../types";
import { getIssueDetail } from "../../api/issue";

export const fetchIssueDetail = createAsyncThunk('issueDetail', async (issueNumber: string | undefined, { rejectWithValue }) => {
  try {
    const response = await getIssueDetail(issueNumber);
    return response;
  } catch (error) {
    return rejectWithValue((error as { message: string }).message);
  }
},);

export const isssueDetailSlice = createSlice({
  name: 'issue-detail',
  initialState: { data: {} as Issue, loading: false, error: null as string | null },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchIssueDetail.pending, state => {
      state.loading = true;
    })
    builder.addCase(fetchIssueDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    builder.addCase(fetchIssueDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default isssueDetailSlice.reducer;