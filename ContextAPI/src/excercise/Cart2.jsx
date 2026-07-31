// import useCart from "./CartContext2";

// function Cart2() {
//   const { cart, dispatch } = useCart();
//   return (
//     <>
//       <h3>Total item: {cart.length}</h3>

//       {cart.map(function (item) {
//         return (
//           <div key={item.id}>
//             <span>{item.name}</span>
//             <span>{item.price}</span>
//             <button
//               onClick={() =>
//                 dispatch({ type: "remove_from_cart", payload: item.id })
//               }
//             >
//               Remove Item
//             </button>

//             <button onClick={() => dispatch({ type: "clear_cart" })}>
//               Clear Item
//             </button>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default Cart2;

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
} from "@mui/material";

import useCart from "./CartContext2";

function Cart() {
  const { cart, dispatch } = useCart();

  const totalPrice = cart.reduce(function (total, item) {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Box sx={{ p: 4, mr:20 }}>
      <Typography variant="h3">Shopping Cart</Typography>

      <Typography sx={{ mt: 2 }}>Total Items: {cart.length}</Typography>

      {cart.map(function (item) {
        return (
          <Card key={item.id} sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h5">{item.name}</Typography>

              <Typography>Price: ${item.price}</Typography>

              <Stack direction="row" spacing={2} sx={{ mt: 2,ml:18 }}>
                <Button
                  variant="outlined"
                  onClick={() =>
                    dispatch({
                      type: "DECREASE",
                      payload: item.id,
                    })
                  }
                >
                  -
                </Button>

                <Typography>{item.quantity}</Typography>

                <Button
                  variant="outlined"
                  onClick={() =>
                    dispatch({
                      type: "INCREASE",
                      payload: item.id,
                    })
                  }
                >
                  +
                </Button>

                <Button
                  color="error"
                  variant="contained"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item.id,
                    })
                  }
                >
                  Remove
                </Button>
              </Stack>
            </CardContent>
          </Card>
        );
      })}

      <Typography variant="h4" sx={{ mt: 3 }}>
        Total Price: ${totalPrice}
      </Typography>

      <Button
        variant="contained"
        color="error"
        sx={{ mt: 2 }}
        onClick={() =>
          dispatch({
            type: "CLEAR_CART",
          })
        }
      >
        Clear Cart
      </Button>
    </Box>
  );
}

export default Cart;