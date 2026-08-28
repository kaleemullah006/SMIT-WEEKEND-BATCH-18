import { create } from "zustand"

export const useCounter = create((set,get) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count > 0  ?  -1 : 0 })),
    manual: (value) => set((state) => ({ count: state.count + value })),
    reset: () => {
        set({ count: 0 })
    },

      checkLimit: () => {
    const currentValue = get().count;   // pehle nikala

    if (currentValue >= 5) {
      set({ message: "Limit cross ho gayi! 🚫" });   // phir use kiya set() mein
    } else {
      set({ message: "Abhi thik hai ✅" });
    }
  }

}))

