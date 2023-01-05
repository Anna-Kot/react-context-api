import "./App.css";
import Nav from "./components/Nav";
import Checkout from "./components/Checkout";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
