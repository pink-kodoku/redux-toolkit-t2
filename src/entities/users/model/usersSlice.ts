import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@app/store/store";
import { initialState } from "./data";

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export const selectAllUsers = (state: RootState) => state.users;

export default usersSlice.reducer;