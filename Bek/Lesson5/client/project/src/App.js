import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import ProductsPage from './components/ProductsPage';
import AuthPage from './components/AuthPage';
import './App.css';

function App() {
  return (
    <div>
   <Nav/>
   <Routes>
<Route path="/products" element={<ProductsPage/>}/>
<Route path="/auth" element={<AuthPage/>}/>
    </Routes>

</div>
   
  );
}

export default App;
