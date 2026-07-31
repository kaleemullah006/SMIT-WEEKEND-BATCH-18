// import  useCart  from "./CartContext2";

// function Products2() {
//     const {dispatch} = useCart()

//     const products = [
//         {
//             name: "laptop",
//             price: 10000,
//             id:1
//         },
//         {
//             name: "Camera",
//             price: 110000,
//             id:2
//         },
//         {
//             name: "mobile",
//             price: 50000,
//             id:3
//         }
//     ]

//   return (
//       <>

//           {products.map(function (product) {
//               return <div key={product.id}>
//                   <h1>{ product.name}</h1>
//                   <h1>{product.price}</h1>
//                   <button onClick={()=> dispatch({type:"add_to_cart", payload: product})}>Add To Cart</button>
//               </div>

//       })}

//       </>

//   )
// }

// export default Products2

import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import useCart from "./CartContext2";

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
      name: "Headphone",
      price: 100,
    },
  ];

  return (
    <>
      <Typography variant="h3" sx={{ mr:23, pt:5 }}>
        Products
      </Typography>

      <Grid container spacing={1} direction="row" justifyContent="center" sx={{pt:5, mr:5}}>
        {products.map(function (product) {
          return (
            <Grid item xs={12} sm={4} md={4} key={product.id}>
              <Card
                sx={{
                  width: 250,
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography variant="h5">{product.name}</Typography>

                  <Typography>Price: ${product.price}</Typography>

                  <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: product,
                      })
                    }
                  >
                    Add To Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Products;
