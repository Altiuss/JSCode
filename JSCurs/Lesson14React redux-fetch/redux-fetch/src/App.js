import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CartPage from "./pages/CartPage";
import CategoriesPage from "./pages/CategoriesPage";
import './App.css'
import ProductsPage from "./pages/ProductsPage";
import ProductsDescrPage from "./pages/ProductsDescrPage";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CategoriesPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path=":category" element={<ProductsPage />}/>
          <Route path="product/:id" element={<ProductsDescrPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
