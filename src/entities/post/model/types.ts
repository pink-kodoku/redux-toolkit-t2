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
  content: string;
  userId: string;
  date: string;
  reactions: Reaction;
}