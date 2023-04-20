import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/store/store';
import { nanoid } from '@reduxjs/toolkit'
import { IPost, Reaction } from './types';
import { initialState } from './data';

interface PostAddedAction {
  type: string;
  payload: IPost
}

interface ReactionAddedAction {
  type: string;
  payload: {
    postId: string;
    reaction: keyof Reaction;
  }
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PostAddedAction) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          }
        }
      }
    },
    reactionAdded(state, action: ReactionAddedAction) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find(post => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    }
  }
})


export const selectAllPosts = (state: RootState) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;