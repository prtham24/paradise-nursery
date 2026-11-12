
import { Routes, Route, Link } from "react-router-dom";
import { Leaf, ArrowRight } from "lucide-react";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
        <div className="hero-logo">
          <Leaf size={42} />
        </div>

        <p className="eyebrow">GROW YOUR OWN PARADISE</p>

        <h1>Paradise Nursery</h1>

        <p className="hero-description">
          Bring nature home. Discover beautiful indoor plants
          that transform your space into a peaceful green paradise.
        </p>

        <Link to="/plants" className="primary-button">
          Get Started <ArrowRight size={18} />
        </Link>

        <Link to="/about" className="hero-about">
          Discover Our Story
        </Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}
