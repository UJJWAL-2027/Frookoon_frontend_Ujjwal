import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard/ProductCard.jsx";
import { Link } from "react-router-dom";

const products = [
  { id: 1, title: "Bananas", price: 40, image: "https://placehold.co/150" },
  { id: 2, title: "Bread", price: 30, image: "https://placehold.co/150" },
  { id: 3, title: "Eggs", price: 90, image: "https://placehold.co/150" }
];

function ProductListing({ addToCart }) {
  return (
    <>
      <Header />
      <Link to="/cart" style={{ margin: "20px", display: "block" }}>
        Go to Cart
      </Link>

      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            {...p}
            onAdd={() => addToCart(p)}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default ProductListing;
