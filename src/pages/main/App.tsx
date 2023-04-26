import PostPage from "@pages/post/PostPage";
import PostsPage from "../posts/PostsPage"

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from "@shared/components";
import EditPostPage from "@pages/editPost/EditPostPage";
import CreatePostPage from "@pages/createPost/CreatePostPage";
import UsersList from "@features/users/usersList/UsersList";
import UserPage from "@pages/user/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsPage />} />

          <Route path="post">
            <Route index element={<CreatePostPage />} />
            <Route path=":postId" element={<PostPage />} />
            <Route path="edit/:postId" element={<EditPostPage />} />
          </Route>

          <Route path="user">
            <Route index element={<UsersList />} />
            <Route path=":userId" element={<UserPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
