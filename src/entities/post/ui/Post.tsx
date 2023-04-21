import PostAuthor from './PostAuthor';
import { TimeAgo, ReactionButtons } from '@shared/components';
import styles from './styles.module.scss'
import { IPost, ReactionNames } from '../model/types';
import { memo } from 'react';
import _ from 'lodash'

interface IPostProps extends IPost, React.HTMLAttributes<HTMLDivElement> {
  title: string;
  id: string;
  body: string;
  handleAddReaction: (postId: string, reactionName: ReactionNames) => void
}

function areEqual(prevProps: IPostProps, nextProps: IPostProps) {
  const isReactionsEqual = _.isEqual(prevProps.reactions, nextProps.reactions);
  const isPostContentEqual = prevProps.title === nextProps.title && prevProps.body === prevProps.body;
  if (isReactionsEqual && isPostContentEqual) {
    return true;
  }

  return false;
}

const Post: React.FC<IPostProps> = memo(({ id, title, body, userId, date, reactions, handleAddReaction, ...props }) => {
  return (
    <article className={styles.post} {...props}>
      <h3>{title}</h3>
      <p>{body.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={userId} />
        <TimeAgo timestamp={date} />
      </p>
      <ReactionButtons post={{ id, title, body, userId, date, reactions }} handleAddReaction={handleAddReaction} />
    </article>
  )
}, areEqual)

export default Post;