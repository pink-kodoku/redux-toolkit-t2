import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import Post from "@entities/post/ui/Post";

import { reactionAdded, selectAllPosts } from "@entities/post/model/postsSlice";
import { Typography } from "@shared/components"
import { ReactionNames } from "@entities/post/model/types";

const PostsList = () => {
  const posts = useAppSelector(selectAllPosts);
  const dispatch = useAppDispatch();

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const handleAddReaction = (id: string, reactionName: ReactionNames) => {
    dispatch(reactionAdded({ postId: id, reaction: reactionName }))
  }

  const renderedPosts = orderedPosts.map(post => (
    <Post
      key={post.id}
      {...post}
      style={{ marginBottom: 20 }}
      handleAddReaction={handleAddReaction}
    />
  ))


  return (
    <div>
      <Typography element="h2" style={{ marginBottom: 10 }}>Posts</Typography>
      {renderedPosts}
    </div>
  )
}

export default PostsList;