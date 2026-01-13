import CartItem from "../components/CartItem.jsx";
import { Link } from "react-router-dom";

function Cart({ cart, increaseQty, decreaseQty, removeItem }) {
  if (cart.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Your cart is empty</h2>
        <Link to="/">Go back to products</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeItem={removeItem}
        />
      ))}

      <Link to="/">← Continue Shopping</Link>
    </div>
  );
}

export default Cart;
