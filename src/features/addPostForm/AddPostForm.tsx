import { useState } from 'react'
import styles from './styles.module.scss'
import { Typography, Input, Textarea, Label, Button } from '../../shared/components'

import { useAppDispatch } from '../../app/store/hooks';
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from '../../entities/post/model/postsSlice';

const postInitialState = {
  title: '',
  content: ''
}

const AddPostForm = () => {
  const dispatch = useAppDispatch();

  const [post, setPost] = useState(postInitialState)

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setPost({
      ...post,
      [name]: value
    })
  }

  const handleSavePost = () => {
    if (post.title && post.content) {
      dispatch(postAdded({
        id: nanoid(),
        title: post.title,
        content: post.content
      }))
    }

    setPost(postInitialState)
  }

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

        <Button type="button" onClick={handleSavePost}>
          Save Post
        </Button>
      </form>
    </section>
  )
}

export default AddPostForm;