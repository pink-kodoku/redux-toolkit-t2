import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '@app/axios'
import { IPost, IPostData } from "../model/types";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data }: { data: IPost[] } = await axios.get('/posts');
  return data;
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost: IPostData) => {
  console.log(initialPost)
  const { data } = await axios.post('/posts', initialPost);
  return data;
})

export const updatePost = createAsyncThunk('posts/updatePost', async (initialPost: Partial<IPost>) => {
  const { id } = initialPost;
  try {
    const response = await axios.put(`posts/${id}`)
    if (response?.status === 200) return initialPost;
    return `${response?.status}: ${response?.statusText}`;
  } catch (err: any) {
    return err.message;
  }
})

export const deletePost = createAsyncThunk('posts/deletePost', async (initialPost: Partial<IPost>) => {
  const { id } = initialPost;
  try {
    const response = await axios.delete(`posts/${id}`);
    if (response?.status === 200) return initialPost;
    return `${response?.status}: ${response?.statusText}`;
  } catch (err: any) {
    return err.message;
  }
})