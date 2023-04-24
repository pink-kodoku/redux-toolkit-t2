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

export interface IPostData {
  title: string;
  body: string;
  userId: string;
}

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed'

export interface IState {
  posts: IPost[],
  status: Status;
  error: string | null;
}

export interface ActionType<T> {
  type: string;
  payload: T;
}