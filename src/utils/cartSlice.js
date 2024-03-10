import { createSlice } from "@reduxjs/toolkit";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
const itemCount = cartFromLocalStorage.reduce((total, item) => total + item.quantity, 0);


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: cartFromLocalStorage,
    itemCount: itemCount
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.card.info.id === newItem.card.info.id);

      if (existingItemIndex !== -1) {
        // If item already exists in the cart, increase its quantity
        state.items[existingItemIndex].quantity += 1;
        state.itemCount += 1;
      } else {
        // If item doesn't exist, add it to the cart with quantity 1
        newItem.quantity = 1;
        state.items.push(newItem);
        state.itemCount += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      const itemIndexToRemove = state.items.findIndex(item => item.card.info.id === itemIdToRemove);
      if (itemIndexToRemove !== -1) {
        state.items.splice(itemIndexToRemove, 1);
        state.itemCount -= 1;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    clearItem: (state, action) => {
      state.items = [];
      state.itemCount = 0;
      localStorage.clear();
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.card.info.id === itemId);
      if (item) {
        item.quantity += 1;
        state.itemCount += 1;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },

    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.card.info.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.itemCount -= 1;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
  },
});

export const { addItem, removeItem, clearItem , incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
