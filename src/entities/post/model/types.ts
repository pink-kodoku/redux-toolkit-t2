export interface Reaction {
  thumbsUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
}

export type ReactionNames = keyof Reaction;

export interface IPost {
  id: string;
  title: string;
  body: string;
  userId: string;
  date: string;
  reactions: Reaction;
}

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed'

export interface IState {
  posts: IPost[],
  status: Status;
  error: string | null;
}

export interface PostAddedAction {
  type: string;
  payload: IPost
}

export interface ReactionAddedAction {
  type: string;
  payload: {
    postId: string;
    reaction: keyof Reaction;
  }
}