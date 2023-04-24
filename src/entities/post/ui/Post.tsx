import PostAuthor from './PostAuthor';
import { TimeAgo, ReactionButtons } from '@shared/components';
import styles from './styles.module.scss'
import { IPost } from '../model/types';
import { memo } from 'react';
import _ from 'lodash'

import { Link } from 'react-router-dom'

interface IPostProps extends IPost, React.HTMLAttributes<HTMLDivElement> {
  title: string;
  id: string;
  body: string;
}

function areEqual(prevProps: IPostProps, nextProps: IPostProps) {
  const isReactionsEqual = _.isEqual(prevProps.reactions, nextProps.reactions);
  const isPostContentEqual = prevProps.title === nextProps.title && prevProps.body === prevProps.body;
  if (isReactionsEqual && isPostContentEqual) {
    return true;
  }

  return false;
}

const Post: React.FC<IPostProps> = memo(({ id, title, body, userId, date, reactions, ...props }) => {
  return (
    <article className={styles.post} {...props}>
      <h3>{title}</h3>
      <p className={styles.body}>{body.substring(0, 75)}</p>
      <div className={styles.postInfo}>
        <div className={styles.postLink}>
          <Link to={`posts/${id}`} className={styles.link}>View Post</Link>
        </div>
        <PostAuthor userId={userId} />
        <TimeAgo timestamp={date} />
      </div>
      <ReactionButtons post={{ id, title, body, userId, date, reactions }} />
    </article>
  )
}, areEqual)

export default Post;