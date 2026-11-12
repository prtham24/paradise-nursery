
import Navbar from "./Navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <p className="eyebrow">OUR STORY</p>
        <h1>About Paradise Nursery</h1>

        <p>
          Paradise Nursery is an online destination for plant lovers.
          We believe that bringing greenery into everyday spaces creates
          healthier, happier and more peaceful environments.
        </p>

        <p>
          Our collection includes carefully selected indoor plants,
          air-purifying plants and beautiful succulents. Whether you are
          a beginner or an experienced plant enthusiast, we aim to help
          you find the perfect plant for your space.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to make plant shopping simple and accessible
          while encouraging people to build greener and more sustainable
          surroundings.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>A diverse collection of indoor plants.</li>
          <li>Affordable prices for every plant lover.</li>
          <li>A simple and convenient shopping experience.</li>
          <li>Helping people bring nature closer to home.</li>
        </ul>
      </main>
    </>
  );
}
