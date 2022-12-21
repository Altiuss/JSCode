import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
