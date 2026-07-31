import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: Number(price),
      }),
    });

    const data = await response.json();

    console.log(data);

    setName("");
    setPrice("");
  }

  return (
    <>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={function (e) {
            setName(e.target.value);
          }}
        />

        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={function (e) {
            setPrice(e.target.value);
          }}
        />

        <button type="submit">Save Product</button>
      </form>
    </>
  );
}

export default ProductForm;
