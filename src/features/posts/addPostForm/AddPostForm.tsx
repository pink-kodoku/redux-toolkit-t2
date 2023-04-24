import { useState } from 'react'
import styles from './styles.module.scss'
import { Typography, Input, Textarea, Label, Button } from '@shared/components'

import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { selectAllUsers } from '@entities/users/model/usersSlice';

import { addNewPost } from '@entities/post/api/posts';

const postInitialState = {
  title: '',
  content: '',
  userId: ''
}

const AddPostForm = () => {
  const dispatch = useAppDispatch();

  const [post, setPost] = useState(postInitialState)
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const users = useAppSelector(selectAllUsers)

  const canSave = [post.title, post.content, post.userId].every(Boolean) && addRequestStatus === 'idle'

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setPost({
      ...post,
      [name]: value
    })
  }

  const handleSavePost = () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        const postObj = {
          title: post.title,
          body: post.content,
          userId: post.userId
        }
        dispatch(addNewPost(postObj)).unwrap()
        setPost(postInitialState)
      } catch (err: any) {
        console.error('Failed to save the post', err)
      } finally {
        setAddRequestStatus('idle')
      }
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