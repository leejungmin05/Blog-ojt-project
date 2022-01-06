import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  return (
    <div>
        <HeaderContainer />
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/create" element={<CreatePost />} exact={true} />
        <Route path="/post/:id" element={<PostDetail />} exact={true} />
      </Routes>
    </div>
  );
}
export default App;
