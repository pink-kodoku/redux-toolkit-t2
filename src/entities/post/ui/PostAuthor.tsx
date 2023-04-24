import { selectAllUsers } from "@entities/users/model/usersSlice";
import { useAppSelector } from "@app/store/hooks";

interface IProps {
  userId: string;
}

const PostAuthor: React.FC<IProps> = ({ userId }) => {
  const users = useAppSelector(selectAllUsers);

  const author = users.find(user => user.id === userId)

  return <span>by {author ? author.name : 'Unknown author'}</span>
}

export default PostAuthor;