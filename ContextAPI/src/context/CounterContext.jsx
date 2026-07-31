import { useContext, useReducer, createContext } from "react";

const CounterContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return state + 1;

    case "delete":
      if (state > 1) {
        return state - 1;
      }

    case "clear":
      return 0;

    default:
      return state;
  }
}

export  function CounterProvider({ children }) {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <CounterContext.Provider value={{count, dispatch}}>
        {children}
      </CounterContext.Provider>
    </>
  );
}

export function useCounter() {
  return useContext(CounterContext);
}
