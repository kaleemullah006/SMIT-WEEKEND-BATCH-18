import { create } from "zustand";

 export const useTodo= create((set) => ({
    users: [],

    addUser:(name) => set((state) => 
        ({users: [...state.users, name]
        })),

        deleteUser:(name)=> set((state)=>({
            users: state.users.filter((item)=> item !== name)
        })),

        clearUser: ()=>set({
            users:[]
        }),
        manual: (value)=> set((state)=>({
            users:[...state.users, value]
        }))
}))