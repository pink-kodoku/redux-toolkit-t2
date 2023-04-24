import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const { data } = await axios.get(USERS_URL)
    return data;
  } catch (err: any) {
    return err.message;
  }
})