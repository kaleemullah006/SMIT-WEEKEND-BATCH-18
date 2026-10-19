// import { create } from "zustand";


//  export const useWallet= create((set,get)=> ({
// balance: 100,
// meesage:"",
//  addMoney: (amount)=> set((state)=> ({balance: state.balance + amount})),
// spendMoney: (amount)=> {
//     const currentBalnce = get().balance;

//     if(currentBalnce <  amount){
//         set({message: "balance nakafi hai"})
//     }else{
//         set((state)=>({balance:state.balance - amount,
//             message: "Transection ho gayi"
//         }))
//     }

// }
// }))

import { create } from "zustand";

export const useCounter = create((set) => ({
    count: 0,

    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    manual: (value) => set((state) => ({ count: state.count + value })),
    reset: () => set({ count: 0 }),
    
   

}))