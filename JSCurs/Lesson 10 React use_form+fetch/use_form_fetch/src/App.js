 import { getProducts } from "./request/products";
import { useState, useEffect } from "react";
import { Context } from "../src/context";
import ProductsContainer from "./components/ProductsContainer";
import AddProductForm from "./components/AddProductForm";


function App() {

  const [ products, setProducts] = useState([])

useEffect(() => {
  getProducts(setProducts)
},[])
 console.log(products)

 const createNewProduct = (product) => setProducts((prev) => [...prev, {...product, id: Date.now()}]);

  return (
    <div className="App">
      <header >
      <Context.Provider value={{ products , createNewProduct}}>
      <AddProductForm />
      <ProductsContainer />
      </Context.Provider>
      </header>
    </div>
  );
}

export default App;
