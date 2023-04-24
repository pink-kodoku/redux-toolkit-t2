import PostsList from "@features/posts/postsList/PostsList";
import { Container, Typography } from "@shared/components";


const PostsPage = () => {
  return (
    <main>
      <Container>
        <Typography element="h1" style={{ textAlign: 'center' }}>Hello Guest!</Typography>
        <PostsList />
      </Container>
    </main>
  )
}

export default PostsPage;