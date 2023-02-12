import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import Products from './pages/Products';

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
