import PostsList from "../../features/postsList/PostsList";
import Container from "../../shared/components/container/Container";
import Typography from "../../shared/components/typograpy/Typography";


const Posts = () => {
  return (
    <main>
      <Container>
        <Typography element="h1" style={{ textAlign: 'center' }}>Hello Guest!</Typography>
        <PostsList />
      </Container>
    </main>
  )
}

export default Posts;