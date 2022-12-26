import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AbautPage from "./pages/AbautPage";
import CategoriesPage from "./pages/CategoriesPage";
import MainPage from "./pages/MainPage";
import ProductDescrPage from "./pages/ProductDescrPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="abaut" element={<AbautPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/:category" element={<ProductsPage />} />
          <Route path="product/:id" element={<ProductDescrPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
