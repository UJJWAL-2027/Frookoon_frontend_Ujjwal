import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";

const products = [
  { id: 1, title: "Fresh Apples", price: 120, image: "https://via.placeholder.com/150" },
  { id: 2, title: "Milk Packet", price: 60, image: "https://via.placeholder.com/150" }
];

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      <Header />

      <section className="hero">
        <h1>10-minute delivery from local stores</h1>
        <p>Groceries & daily essentials delivered fast</p>
      </section>

      <section className="products">
        {loading &&
          products.map(p => <SkeletonCard key={p.id} />)}

        {!loading && products.length === 0 && (
          <p className="empty">No products available</p>
        )}

        {!loading &&
          products.map(p => <ProductCard key={p.id} {...p} />)}
      </section>

      <Footer />
    </>
  );
};

export default Home;
