import { create } from 'zustand';
import { toast } from 'react-toastify';

const useCartStore = create((set) => ({
  cart: [], // Array to hold products in the cart

  // Add item to the cart
  addItem: (product) => set((state) => {
    const existingItemIndex = state.cart.findIndex(item => item.id === product.id);

    if (existingItemIndex >= 0) {
      // Update quantity if the item is already in the cart
      const updatedCart = [...state.cart];
      updatedCart[existingItemIndex].quantity += product.quantity;
      // Add the toast notification
      toast(`${product.title} quantity updated.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return { cart: updatedCart };
    } else {
      // Add new item to the cart
      return { cart: [...state.cart, product] };
    }
  }),

  // Remove item from the cart
  removeItem: (id) => set((state) => {
    toast(`Item removed from cart.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return { cart: state.cart.filter(item => item.id !== id) };
  }),

  // Clear the cart
  clearCart: () => set(() => {
    toast(`Cart cleared.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return { cart: [] };
  }),

  // Update item quantity in the cart
  updateQuantity: (id, quantity) => set((state) => {
    const updatedCart = state.cart.map(item => 
      item.id === id ? { ...item, quantity } : item
    );
    toast(`Quantity updated.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return { cart: updatedCart };
  }),

  // Get total price of items in the cart
  getTotalPrice: () => (state) => {
    return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}));

export default useCartStore;
