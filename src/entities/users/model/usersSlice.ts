import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "@app/store/store";
import { initialState } from "./data";
import { fetchUsers } from "../api/users";

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})

export const selectAllUsers = (state: RootState) => state.users;

export default usersSlice.reducer;