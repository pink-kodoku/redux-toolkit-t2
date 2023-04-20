import { useAppSelector, useAppDispatch } from "../../app/store/hooks";
import Post from "../../entities/post/ui/Post";

import { selectAllPosts } from "../../entities/post/model/postsSlice";
import { Typography } from "../../shared/components"

const PostsList = () => {
  const posts = useAppSelector(selectAllPosts);

  const renderedPosts = posts.map(post => (
    <Post
      title={post.title}
      content={post.content}
      key={post.id}
      style={{ marginBottom: 20 }}
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