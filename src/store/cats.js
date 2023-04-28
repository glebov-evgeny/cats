import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  itemsQuantity: 0,
  favoriteItems: [],
  favoriteItemsQuantity: 0,
}

const catsSlice = createSlice({
  name: 'cats',
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          url: newItem.url,
          isFavorite: false
        })
        state.itemsQuantity++;
      }
    },
    addHeart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      
      existingItem.isFavorite = true;

    },
    addItemToCartFavorite(state, action) {
      const newItem = action.payload;
      const existingItem = state.favoriteItems.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.favoriteItems.push({
          id: newItem.id,
          url: newItem.image.url,
        })
        state.favoriteItemsQuantity++;

      }    
    },
    removeItemFromFavorite(state, action) {
      const newItem = action.payload;
      state.favoriteItems = state.favoriteItems.filter((item) => item.id !== newItem)
      state.favoriteItemsQuantity--;
    }
  }
})


export const catsActions = catsSlice.actions;
export default catsSlice.reducer;