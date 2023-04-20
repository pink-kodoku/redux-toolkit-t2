import AddPostForm from "../../features/addPostForm/AddPostForm";
import PostsList from "../../features/postsList/PostsList";
import { Container, Typography } from "../../shared/components";


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