import Nav from "./components/Nav";
import Main from "./pages/Main";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProductDescrPage from "./pages/ProductDescrPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:category" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDescrPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
