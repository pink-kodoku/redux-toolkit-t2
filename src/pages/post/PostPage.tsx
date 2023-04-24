import { useAppSelector } from "@app/store/hooks";
import { selectPostById } from "@entities/post/model/postsSlice";
import Post from "@entities/post/ui/Post";
import { Container } from "@shared/components";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { postId } = useParams()

  const post = useAppSelector(state => selectPostById(state, postId!))

  if (!post) {
    return <section>
      <h2>Post not found</h2>
    </section>
  }

  return (
    <Container>
      <Post {...post} mode='edit'/>
    </Container>
  )
}

export default PostPage;