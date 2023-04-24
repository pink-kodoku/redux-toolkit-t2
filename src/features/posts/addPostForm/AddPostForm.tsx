import { useState } from 'react'
import styles from './styles.module.scss'
import { Typography} from '@shared/components'

import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { selectAllUsers } from '@entities/users/model/usersSlice';

import { addNewPost } from '@entities/post/api/posts';
import PostForm from '../postForm/PostForm';
import { IPostData, Status } from '@entities/post/model/types';

const postInitialState = {
  title: '',
  body: '',
  userId: ''
}


const AddPostForm = () => {
  const dispatch = useAppDispatch();
  const [post, setPost] = useState<IPostData>(postInitialState)
  const [addRequestStatus, setAddRequestStatus] = useState<Status>('idle')

  const users = useAppSelector(selectAllUsers)

  const handleSavePost = (post: IPostData) => {
    try {
      setAddRequestStatus('loading')
      dispatch(addNewPost(post)).unwrap()
      setPost(postInitialState)
    } catch (err: any) {
      console.error('Failed to save the post', err)
    } finally {
      setAddRequestStatus('idle')
    }
  }

  return (
    <section>
      <Typography element='h2'>Add a new Post!</Typography>
      <PostForm
        postData={post}
        handleSubmit={handleSavePost}
        status={addRequestStatus}
        users={users} />
    </section>
  )
}

export default AddPostForm;