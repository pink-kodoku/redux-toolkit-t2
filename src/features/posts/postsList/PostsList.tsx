import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import Post from "@entities/post/ui/Post";
import { useEffect } from "react";
import { selectAllPosts, getPostsError, getPostsStatus, reactionAdded } from "@entities/post/model/postsSlice";
import { fetchPosts } from "@entities/post/api/posts";

import { Typography } from "@shared/components"
import { ReactionNames } from "@entities/post/model/types";

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

  const handleAddReaction = (id: string, reactionName: ReactionNames) => {
    dispatch(reactionAdded({ postId: id, reaction: reactionName }))
  }

  let content = null;
  if (postsStatus === 'loading') {
    content = <p>Loading...</p>
  } else if (postsStatus === 'succeeded') {
    console.log("succcess")
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map(post => (
      <Post
        style={{ marginBottom: 20 }}
        handleAddReaction={handleAddReaction}
        key={post.id}
        {...post}
      />
    ))
  } else if (postsStatus === 'failed') {
    content = <p>{postsError}</p>
  }


  return (
    <div>
      <Typography element="h2" style={{ marginBottom: 10 }}>Posts</Typography>
      {content}
    </div>
  )
}

export default PostsList;