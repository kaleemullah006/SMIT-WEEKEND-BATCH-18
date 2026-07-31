import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, dispatch } = useCart();

  return (
    <>
      <h2>Cart</h2>

      <h3>Total Items: {cart.length}</h3>

      {cart.map(function (item) {
        return (
          <div key={item.id}>
            <span>
              {item.name} - ${item.price}
            </span>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item.id,
                })
              }
            >
              Remove
            </button>
          </div>
        );
      })}

      <br />

      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
    </>
  );
}

export default Cart;
