import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "@entities/post/model/postsSlice";
import usersReducer from '@entities/users/model/usersSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;