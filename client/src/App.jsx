import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;