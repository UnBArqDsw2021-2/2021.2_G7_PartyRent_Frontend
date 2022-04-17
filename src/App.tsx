import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from "./components/Product/Products";
import NavigationBar from './components/NavigationBar';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Login from './Login/Login';
import Register from './Login/Register';
import ProductDetail from './components/Product/ProductDetail';

function App() {
    return (
        <BrowserRouter>
            <header>
                <NavigationBar />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
