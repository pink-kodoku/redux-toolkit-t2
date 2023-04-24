import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '@app/axios'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const { data } = await axios.get('/users')
    return data;
  } catch (err: any) {
    return err.message;
  }
})