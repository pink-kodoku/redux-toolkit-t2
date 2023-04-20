import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/store/store';

import { nanoid } from '@reduxjs/toolkit'

const initialState = [
  {
    id: "1",
    title: "Что вы знаете о математической индукции и других методах доказательства?",
    content: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
  },
  {
    id: "2",
    title: "Почему биологи и химики не знают точного происхождения жизни на планете Земля?",
    content: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
  },
  {
    id: "3",
    title: "Как повысить свою скорость чтения и для чего это делать, когда есть аудиокниги?",
    content: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
  },
]

interface IPost {
  id: string;
  title: string;
  content: string;
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: { type: string, payload: IPost }) {
        state.push(action.payload)
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        }
      }
    }
  }
})


export const selectAllPosts = (state: RootState) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;