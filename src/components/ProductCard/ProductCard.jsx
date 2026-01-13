import React from "react";
import "./ProductCard.css";

function ProductCard({
  image,
  title,
  price,
  onAction,
  actionText = "Add to Cart"
}) {
  return (
    <div className="product-card">
      <img
        src={image}
        alt={title}
        className="product-card__image"
      />

      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__price">₹{price}</p>

        {onAction && (
          <button
            className="product-card__button"
            onClick={onAction}
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
