import styles from './styles.module.scss'
import { IPost, ReactionNames } from '../../../entities/post/model/types';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕'
}

interface IProps {
  post: IPost;
  handleAddReaction: (id: string, reactionName: ReactionNames) => void;
}


export const ReactionButtons: React.FC<IProps> = ({ post, handleAddReaction }) => {
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