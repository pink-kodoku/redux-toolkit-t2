import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { IPost } from "../model/types";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data }: { data: IPost[] } = await axios.get(POSTS_URL);
  return data;
})