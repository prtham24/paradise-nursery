
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Leaf, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <Leaf size={24} /> Paradise Nursery
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/about">About Us</Link>
        <Link to="/cart" className="cart-link">
          <ShoppingCart size={20} />
          Cart
          <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}
