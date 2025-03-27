import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import PostPage from "./pages/PostPage"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default App
