import { useAppSelector } from "@app/store/hooks";
import { selectAllPosts, selectPostsByUser } from "@entities/post/model/postsSlice";
import { selectAllUsers, selectUserById } from "@entities/users/model/usersSlice";
import { Link, useParams } from "react-router-dom";


const UserPage = () => {
  const { userId } = useParams();

  const user = useAppSelector(state => selectUserById(state, userId!))

  const postsForUser = useAppSelector(state => selectPostsByUser(state, userId!))

  const postsTitles = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
      <h2>{user?.name}</h2>
      <ol>
        {postsTitles}
      </ol>
    </section>
  )
}

export default UserPage;