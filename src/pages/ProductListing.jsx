import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, title: "Bananas", price: 40, image: "https://via.placeholder.com/150" },
  { id: 2, title: "Bread", price: 30, image: "https://via.placeholder.com/150" },
  { id: 3, title: "Eggs", price: 90, image: "https://via.placeholder.com/150" }
];

const ProductListing = () => {
  return (
    <>
      <Header />
      <section className="products">
        {products.map(p => (
          <ProductCard key={p.id} {...p} />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default ProductListing;
