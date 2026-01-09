import { memo } from "react";

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} loading="lazy" />
      <h3>{title}</h3>
      <p>₹{price}</p>
      <button className="btn">Add to Cart</button>
    </div>
  );
};

export default memo(ProductCard);
