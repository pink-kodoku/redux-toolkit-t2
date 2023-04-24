import styles from './styles.module.scss'
import { IPost, ReactionNames } from '../../../entities/post/model/types';
import { useAppDispatch } from '@app/store/hooks';
import { reactionAdded } from '@entities/post/model/postsSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕'
}

interface IProps {
  post: IPost;
}


export const ReactionButtons: React.FC<IProps> = ({ post }) => {
  const dispatch = useAppDispatch();

  const handleAddReaction = (id: string, reactionName: ReactionNames) => {
    dispatch(reactionAdded({ postId: id, reaction: reactionName }))
  }

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]: [any, any]) => {
    return (
      <button
        key={name}
        type="button"
        className={styles.reactionButton}
        onClick={() => handleAddReaction(post.id, name)}>
        {/* @ts-ignore */}
        {emoji} {post.reactions[name]}
      </button>
    )
  })

  return (
    <div>
      {reactionButtons}
    </div>
  )
}