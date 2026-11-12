
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Trash2, Minus, Plus } from "lucide-react";

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <main className="cart-page">
        <div className="section-heading">
          <p className="eyebrow">YOUR SHOPPING BAG</p>
          <h1>Shopping Cart</h1>
          <p>{totalItems} items in your cart</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty 🌱</h2>
            <p>Looks like you haven't added any plants yet.</p>
            <Link to="/plants" className="primary-button">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>Unit Price: ₹{item.price}</p>
                    <p>
                      Subtotal: ₹{item.price * item.quantity}
                    </p>

                    <div className="quantity-controls">
                      <button
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: item.quantity - 1
                            })
                          )
                        }
                      >
                        <Minus size={16} />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: item.quantity + 1
                            })
                          )
                        }
                      >
                        <Plus size={16} />
                      </button>

                      <button
                        className="delete-button"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        <Trash2 size={17} />
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="summary-row total-row">
                <span>Total Amount</span>
                <strong>₹{totalAmount}</strong>
              </div>

              <button
                className="checkout-button"
                onClick={() => alert("Coming Soon! Thank you for shopping with Paradise Nursery.")}
              >
                Checkout
              </button>

              <Link to="/plants" className="continue-link">
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}
