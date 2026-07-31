import { useCart } from "../context/CartContext";

function Products() {
  const { dispatch } = useCart();

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
    },
    {
      id: 2,
      name: "Mobile",
      price: 500,
    },
    {
      id: 3,
      name: "Headphones",
      price: 100,
    },
  ];

  function addToCart(product) {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  }

  return (
    <>
      <h2>Products</h2>

      {products.map(function (product) {
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>

            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        );
      })}
    </>
  );
}

export default Products;
