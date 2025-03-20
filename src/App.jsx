import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import PostPage from "./pages/PostPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Home />}
        />

        <Route
          path="/post/:postId"
          element={<PostPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
