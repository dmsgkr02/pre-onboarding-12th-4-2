import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Issue } from "../../types";
import { getIssueList, LOAD_DATA_LENGTH } from "../../api/issue";

// Define a type for the slice state
interface IssueState {
  data: Issue[];
  page: number;
  loading: boolean;
  error: string | null;
  hasMore: boolean;
}

// Define the initial state using that type
const initialState: IssueState = {
  data: [] as Issue[],
  page: 0,
  loading: false,
  error: null as string | null,
  hasMore: true,
};

export const fetchIssueList = createAsyncThunk(
  "issueList",
  async (page: number, { rejectWithValue }) => {
    try {
      const response = await getIssueList(page);

      return { response, page };
    } catch (error) {
      return rejectWithValue((error as { message: string }).message);
    }
  },
);

export const issueListSlice = createSlice({
  name: "issueList",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIssueList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchIssueList.fulfilled, (state, action) => {
      state.loading = false;
      state.data = [...state.data, ...action.payload.response];
      if (action.payload.response.length < LOAD_DATA_LENGTH) {
        state.hasMore = false;
      }
      state.page = action.payload.page;
    });
    builder.addCase(fetchIssueList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default issueListSlice.reducer;
