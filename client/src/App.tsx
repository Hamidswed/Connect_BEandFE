import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ProductList from "./components/products/ProductList";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
