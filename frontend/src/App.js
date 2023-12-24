import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import Men from "./Pages/Men/Men";
import Product from "./Pages/Product/Product";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Shop />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Product" element={<Product />}>
          <Route path="/ProductId" element={<Product />} />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
