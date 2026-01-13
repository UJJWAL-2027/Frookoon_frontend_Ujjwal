import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard/ProductCard.jsx";

const products = [
  { id: 1, title: "Bananas", price: 40, image: "https://via.placeholder.com/150" },
  { id: 2, title: "Bread", price: 30, image: "https://via.placeholder.com/150" },
  { id: 3, title: "Eggs", price: 90, image: "https://via.placeholder.com/150" }
];

function ProductListing() {
  return (
    <>
      <Header />

      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default ProductListing;
