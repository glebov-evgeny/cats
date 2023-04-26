import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
}

const catsSlice = createSlice({
  name: 'cats',
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          height: newItem.height,
          width: newItem.width,
          url: newItem.url,
      });
      } else {
        existingItem.quantity++;
      }
    }
  }
})


export const catsActions = catsSlice.actions;
export default catsSlice.reducer;