import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AddUserPage from "./pages/AddUserPage";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path='add-user' element={<AddUserPage />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
