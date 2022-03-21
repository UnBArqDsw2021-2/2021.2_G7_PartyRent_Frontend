import './App.css'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
