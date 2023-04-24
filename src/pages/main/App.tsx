import PostPage from "@pages/post/PostPage";
import PostsPage from "../posts/PostsPage"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "@shared/components";
import AddPostForm from "@features/posts/addPostForm/AddPostForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsPage />} />

          <Route path="post">
            <Route index element={<AddPostForm />} />
            <Route path=":postId" element={<PostPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
