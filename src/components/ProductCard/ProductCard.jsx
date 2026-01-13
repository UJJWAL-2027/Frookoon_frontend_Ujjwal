import "./ProductCard.css";

function ProductCard({ image, title, price, onAdd }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>₹{price}</p>
      <button onClick={onAdd}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
