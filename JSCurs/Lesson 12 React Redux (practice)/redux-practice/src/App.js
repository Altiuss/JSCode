
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <div>
   
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    
    </div>
  );
}

export default App;
