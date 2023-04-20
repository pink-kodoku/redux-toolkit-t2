import AddPostForm from "@features/posts/addPostForm/AddPostForm";
import PostsList from "@features/posts/postsList/PostsList";
import { Container, Typography } from "@shared/components";


const Posts = () => {
  return (
    <main>
      <Container>
        <Typography element="h1" style={{ textAlign: 'center' }}>Hello Guest!</Typography>
        <AddPostForm />
        <PostsList />
      </Container>
    </main>
  )
}

export default Posts;