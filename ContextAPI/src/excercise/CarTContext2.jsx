// import { useContext, useReducer, createContext } from "react";

// const  CartContext= createContext()
// const initialState = [];

// function reducer(state, action) {
//     switch (action.type) {

//         case "add_to_cart":
//             return [
//                 ...state,

//                     action.payload

//             ]

//         case "remove_from_cart":
//             return state.filter(function (item) {
//                 return item.id !== action.payload
//             })

//         case "clear_cart":
//             return []

//         default:
//             return state;
//      }
// }

// export  function CartProvider({ children }) {
//     const [cart, dispatch] = useReducer(reducer, initialState)

//     return (<>

//         <CartContext.Provider value={{ cart, dispatch }}>
//             {children}
//     </CartContext.Provider>

//     </>)
// }

// export default function useCart(){
//     return useContext(CartContext)
// }

import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.find(function (item) {
        return item.id === action.payload.id;
      });

      if (existingItem) {
        return state.map(function (item) {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        });
      }

      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ];

    case "REMOVE_FROM_CART":
      return state.filter(function (item) {
        return item.id !== action.payload;
      });

    case "INCREASE":
      return state.map(function (item) {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

    case "DECREASE":
      return state.map(function (item) {
        if (item.id === action.payload && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      });

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default function useCart() {
  return useContext(CartContext);
}