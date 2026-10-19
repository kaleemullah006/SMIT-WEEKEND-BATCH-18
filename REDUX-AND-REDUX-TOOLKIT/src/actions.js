import { INCREMENT, DECREMENT, RESET } from "./constant";

const increment = () => {
    return {
        type:INCREMENT
    }

}

const decrement = () => {
    return {
        type: DECREMENT,
    };
}

const reset = () => {
     return {
        type: RESET,
      };

}

export {increment, decrement, reset}