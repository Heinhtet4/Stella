import { create } from "zustand";

const useStoreCart = create((set)=>({
    carts : [

    ],
    addCart: (item) => set((state) => ({carts: [...state.carts, item]})),
    increaseQty: (id) => set((state) =>({carts: state.carts.map(cart => cart.cartid === id ? {...cart, quantity: cart.quantity + 1,total : cart.price * (cart.quantity + 1)} : cart)})),
    decreaseQty: (id) => set((state) => ({carts: state.carts.map(cart => cart.cartid === id ? {...cart, quantity: cart.quantity - 1,total : cart.price * (cart.quantity - 1)} : cart)})),
    removeItem:(id) => set((state) => ({carts: state.carts.filter(cart => cart.cartid !== id)})),
}))

export default useStoreCart;