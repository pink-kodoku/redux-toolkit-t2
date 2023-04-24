import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import Post from "@entities/post/ui/Post";
import { useEffect } from "react";
import { selectAllPosts, getPostsError, getPostsStatus } from "@entities/post/model/postsSlice";
import { fetchPosts } from "@entities/post/api/posts";


const PostsList = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector(selectAllPosts);
  const postsStatus = useAppSelector(getPostsStatus);
  const postsError = useAppSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])

  let content = null;
  if (postsStatus === 'loading') {
    content = <p>Loading...</p>
  } else if (postsStatus === 'succeeded') {
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map(post => (
      <Post
        style={{ marginBottom: 20 }}
        key={post.id}
        {...post}
      />
    ))
  } else if (postsStatus === 'failed') {
    content = <p>{postsError}</p>
  }


  return (
    <div>
      {content}
    </div>
  )
}

export default PostsList;