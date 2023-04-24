import PostPage from "@pages/post/PostPage";
import PostsPage from "../posts/PostsPage"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "@shared/components";
import EditPostPage from "@pages/editPost/EditPostPage";
import CreatePostPage from "@pages/createPost/CreatePostPage";

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
