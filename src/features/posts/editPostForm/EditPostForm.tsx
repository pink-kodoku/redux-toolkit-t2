import { useState } from 'react'
import styles from './styles.module.scss'
import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { selectAllUsers } from '@entities/users/model/usersSlice';

import { deletePost, updatePost } from '@entities/post/api/posts';
import PostForm from '../postForm/PostForm';
import { IPostData, Status } from '@entities/post/model/types';
import { useNavigate, useParams } from 'react-router-dom';
import { selectPostById } from '@entities/post/model/postsSlice';

const postInitialState = {
  title: '',
  body: '',
  userId: ''
}

const EditPostForm = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const post = useAppSelector(state => selectPostById(state, postId!)) || postInitialState
  const users = useAppSelector(selectAllUsers)

  // const [post, setPost] = useState<IPostData>(postInitialState)
  const [editRequestStatus, setEditRequestStatus] = useState<Status>('idle')


  const handleEditPost = (post: IPostData) => {
    try {
      setEditRequestStatus('loading')
      dispatch(updatePost(post)).unwrap()
      navigate(`/post/${postId}`)
    } catch (err: any) {
      console.error('Failed to save the post', err)
    } finally {
      setEditRequestStatus('idle')
    }
  }

  const handleDeletePost = () => {
    try {
      setEditRequestStatus('loading')
      dispatch(deletePost({id: postId})).unwrap()
      navigate('/')
    } catch (err: any) {
      console.error(`Failed to delete the post`, err)
    } finally {
      setEditRequestStatus('idle')
    }
  }


  return (
    <PostForm
      postData={post}
      handleSubmit={handleEditPost}
      handleDelete={handleDeletePost}
      status={editRequestStatus}
      users={users} />
  )
}

export default EditPostForm;