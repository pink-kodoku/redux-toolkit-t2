import { selectAllUsers } from "@entities/users/model/usersSlice";
import { useAppSelector } from "@app/store/hooks";


const PostAuthor = ({ userId }: { userId: string }) => {
  const users = useAppSelector(selectAllUsers);

  const author = users.find(user => user.id === userId)

  return <span>by {author ? author.name : 'Unknown author'}</span>
}

export default PostAuthor;