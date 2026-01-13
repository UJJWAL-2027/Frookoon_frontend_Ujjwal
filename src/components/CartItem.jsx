function CartItem({ item, increaseQty, decreaseQty, removeItem }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #ddd"
      }}
    >
      <div>
        <h4>{item.title}</h4>
        <p>₹{item.price}</p>
      </div>

      <div>
        <button onClick={() => decreaseQty(item.id)}>-</button>
        <span style={{ margin: "0 10px" }}>{item.qty}</span>
        <button onClick={() => increaseQty(item.id)}>+</button>
      </div>

      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
