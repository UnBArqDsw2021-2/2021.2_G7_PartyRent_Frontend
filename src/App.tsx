import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import NavigationBar from './components/NavigationBar';
import ShoppingCart from './components/ShoppingCart';
import Login from './Login/Login';
import Register from './Login/Register';
import ProductDetail from './components/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

function App() {
    return (
        <BrowserRouter>
            <header>
                <NavigationBar />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
