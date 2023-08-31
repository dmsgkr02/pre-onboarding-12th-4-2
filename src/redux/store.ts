import { configureStore } from '@reduxjs/toolkit'
import issue from './slices/issue'
import issueDetail from './slices/issueDetail'

export const store = configureStore({
  reducer: {
    issuesList: issue,
    issueDetail: issueDetail
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch