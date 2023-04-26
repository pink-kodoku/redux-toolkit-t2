import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "@app/store/store";
import { initialState } from "./data";
import { fetchUsers } from "../api/users";
import { IUser } from "./types";

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action: { type: string, payload: IUser[] }) => {
      return action.payload;
    })
  }
})

export const selectAllUsers = (state: RootState) => state.users;

export const selectUserById = (state: RootState, userId: string) =>
  state.users.find(user => user.id == userId);

export default usersSlice.reducer;