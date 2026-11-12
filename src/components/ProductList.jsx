
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import plants from "../data/plants";
import Navbar from "./Navbar";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const isInCart = (id) =>
    cartItems.some((item) => item.id === id);

  return (
    <>
      <Navbar />

      <main className="products-page">
        <div className="section-heading">
          <p className="eyebrow">BRING NATURE HOME</p>
          <h1>Our Houseplants</h1>
          <p>
            Discover beautiful plants to make your home greener,
            healthier and happier.
          </p>
        </div>

        {categories.map((category) => (
          <section className="plant-category" key={category}>
            <h2>{category}</h2>

            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <article className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />

                    <div className="product-info">
                      <h3>{plant.name}</h3>
                      <p>{plant.description}</p>

                      <div className="product-bottom">
                        <strong>₹{plant.price}</strong>

                        <button
                          className="add-button"
                          disabled={isInCart(plant.id)}
                          onClick={() => dispatch(addItem(plant))}
                        >
                          {isInCart(plant.id) ? "Added ✓" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
