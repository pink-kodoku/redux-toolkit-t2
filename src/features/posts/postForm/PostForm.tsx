import { useState } from 'react';
import styles from './styles.module.scss'
import { Input, Textarea, Label, Button } from '@shared/components'
import { IPostData, Status } from '@entities/post/model/types';
import { IUser } from '@entities/users/model/types';

interface IProps {
  postData: IPostData;
  handleSubmit: (post: IPostData) => void;
  users: IUser[];
  status: Status;
}

const PostForm: React.FC<IProps> = ({ postData, handleSubmit, users, status }) => {
  const [post, setPost] = useState(postData)

  const canSave = [post.title, post.body, post.userId].every(Boolean) && status === 'idle'


  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setPost({
      ...post,
      [name]: value
    })
  }

  const handleOnClicked = () => {
    if (canSave) {
      handleSubmit(post)
    }
  }

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <form className={styles.form}>
      <div className={styles.group}>
        <Label className={styles.label} htmlFor='postTitle'>Post Title: </Label>
        <Input
          type='text'
          id="postTitle"
          name="title"
          value={post.title}
          onChange={handleChange} />
      </div>

      <div className={styles.group}>
        <Label className={styles.label} htmlFor='postTitle'>Post Content: </Label>
        <Textarea
          id="postContent"
          name="body"
          value={post.body}
          onChange={handleChange}
        />
      </div>

      <div className={styles.group}>
        <Label className={styles.label} htmlFor='post author'>Author:</Label>
        <select name="userId" id="post author" defaultValue={postData.userId && postData.userId} value={post.userId} onChange={handleChange}>
          <option value=""></option>
          {usersOptions}
        </select>
      </div>

      <Button type="button" onClick={handleOnClicked} disabled={!canSave}>
        Save Post
      </Button>
    </form>
  )
}

export default PostForm;