import './App.css'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import NavigationBar from "./components/NavigationBar"
import ShoppingCart from "./components/ShoppingCart"

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavigationBar/>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
