import { useState } from 'react'
import styles from './styles.module.scss'
import { Typography, Input, Textarea, Label, Button } from '@shared/components'

import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { selectAllUsers } from '@entities/users/model/usersSlice';

import { postAdded } from '@entities/post/model/postsSlice';

const postInitialState = {
  title: '',
  content: '',
  userId: ''
}

const AddPostForm = () => {
  const dispatch = useAppDispatch();

  const [post, setPost] = useState(postInitialState)

  const users = useAppSelector(selectAllUsers)

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setPost({
      ...post,
      [name]: value
    })
  }

  console.log(post)

  const canSave = Boolean(post.title) && Boolean(post.content) && Boolean(post.userId);

  const handleSavePost = () => {
    if (canSave) {
      dispatch(postAdded(post.title, post.content, post.userId))
      setPost(postInitialState)
    }
  }

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <Typography element='h2'>Add a new Post!</Typography>
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
            name="content"
            value={post.content}
            onChange={handleChange}
          />
        </div>

        <div className={styles.group}>
          <Label className={styles.label} htmlFor='post author'>Author:</Label>
          <select name="userId" id="post author" value={post.userId} onChange={handleChange}>
            <option value=""></option>
            {usersOptions}
          </select>
        </div>

        <Button type="button" onClick={handleSavePost} disabled={!canSave}>
          Save Post
        </Button>
      </form>
    </section>
  )
}

export default AddPostForm;