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
      state.items.push({
        id: newItem.id,
        url: newItem.url,
      })
      state.itemsQuantity++;

      // console.log(newItem)
      // const existingItem = state.items.find((item) => item.id === newItem.id);
      // if (!existingItem) {
      //   state.items.push({
      //     id: newItem.id,
      //     url: newItem.url,
      //   })
      //   state.itemsQuantity++;
      // } else {
      //   console.log('e;t tcnm')
      // }
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