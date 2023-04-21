import PostAuthor from './PostAuthor';
import { TimeAgo, ReactionButtons } from '@shared/components';
import styles from './styles.module.scss'
import { IPost, ReactionNames } from '../model/types';
import { memo } from 'react';
import _ from 'lodash'

interface IPostProps extends IPost, React.HTMLAttributes<HTMLDivElement> {
  title: string;
  id: string;
  content: string;
  handleAddReaction: (postId: string, reactionName: ReactionNames) => void
}

function areEqual(prevProps: IPostProps, nextProps: IPostProps) {
  const isReactionsEqual = _.isEqual(prevProps.reactions, nextProps.reactions);
  const isPostContentEqual = prevProps.title === nextProps.title && prevProps.content === prevProps.content;
  if (isReactionsEqual && isPostContentEqual) {
    return true;
  }

  return false;
}

const Post: React.FC<IPostProps> = memo(({ id, title, content, userId, date, reactions, handleAddReaction, ...props }) => {
  return (
    <article className={styles.post} {...props}>
      <h3>{title}</h3>
      <p>{content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={userId} />
        <TimeAgo timestamp={date} />
      </p>
      <ReactionButtons post={{ id, title, content, userId, date, reactions }} handleAddReaction={handleAddReaction} />
    </article>
  )
}, areEqual)

export default Post;