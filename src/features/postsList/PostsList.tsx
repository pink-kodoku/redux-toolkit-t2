import { useAppSelector, useAppDispatch } from "../../app/store/hooks";
import Post from "../../entities/post/ui/Post";

import { selectAllPosts } from "../../entities/post/model/postsSlice";

const PostsList = () => {
  const posts = useAppSelector(selectAllPosts);

  const renderedPosts = posts.map(post => (
    <Post
      title={post.title}
      content={post.content}
      key={post.id}
    />
  ))


  return (
    <div>
      <h2>Posts</h2>
      {renderedPosts}
    </div>
  )
}

export default PostsList;