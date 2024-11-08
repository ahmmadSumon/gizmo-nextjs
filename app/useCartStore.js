import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  cart: [],

  getTotalPrice: () => {
    // Use `get()` to access the current state instead of `useCartStore.getState()`
    return get().cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  addItem: (product) => set((state) => {
    const existingItemIndex = state.cart.findIndex(item => item.id === product.id);
    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      const updatedCart = [...state.cart];
      updatedCart[existingItemIndex].quantity += product.quantity;
      return { cart: updatedCart };
    } else {
      // Add new item if not found
      // Ensure that product has price and quantity with valid default values
      return { cart: [...state.cart, { ...product, quantity: product.quantity || 1, price: product.price || 0 }] };
    }
  }),

  removeItem: (id) => set((state) => ({
    cart: state.cart.filter(item => item.id !== id)
  })),

  clearCart: () => set(() => ({ cart: [] })),
  updateQuantity: (id, quantity) => set((state) => {
    const updatedCart = state.cart.map(item =>
      item.id === id
        ? { ...item, quantity: quantity > 0 ? quantity : 1 } // Ensure quantity can't go below 1
        : item
    );
    return { cart: updatedCart };
  }),
}));

export default useCartStore;
