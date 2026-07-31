// import ContextAPI from "./contextAPI/ContextAPI"
// import UserContext from "./contextAPI/UserContext"

// function App() {

//   const user = {name:"kaleem", age :25, email:"khan@gmail.com"}

//   return (

//       <UserContext.Provider value={user}>
//         <ContextAPI/>
//       </UserContext.Provider>

//   )
// }

// export default App

// import Products from "./component/Product";
// import Cart from "./component/Cart";
// import { CartProvider } from "./context/CartContext";
// import Counter from "./component/Counter";
// import  {CounterProvider}  from "./context/CounterContext";
// import Todo from "./component/Todo";
// import { TodoProvider } from "./context/TodoContext";
import { CartProvider } from "./excercise/CartContext2";
import Products2 from "./excercise/Products2";
import Cart2 from "./excercise/Cart2";
import { Box, Container } from "@mui/material";
import Navbar from "./excercise/Navbar";
import ProductForm from "./excercise/ProductForm";

// function App() {
//   return (

//     <CartProvider>
//         <Products2/>
//         <Cart2 />

//       </CartProvider>

//   );
// }

// export default App;

function App() {
  return (
    <CartProvider>
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            mt: 5,
            ml:20
          }}
        >
          <Navbar/>
          <Products2 />
          <ProductForm/>

          <Cart2 />
        </Box>
      </Container>
    </CartProvider>
  );
}

export default App;