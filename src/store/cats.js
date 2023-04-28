import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  itemsFavorites: [],
  loading: false,
  itemsQuantity: 0,
  itemsQuantityFavorites: 0,
}

const catsSlice = createSlice({
  name: 'cats',
  initialState: initialState,
  reducers: {
    setData(state, action) {
      state.items = action.payload;
      state.loading = false;
      state.itemsQuantity = action.payload.length;
    },
    setDataFavorites(state, action) {
      state.itemsFavorites = action.payload;
      state.loading = false;
      state.itemsQuantityFavorites = action.payload.length;
    },
    removeItemFavorite(state, action) {
      state.itemsFavorites = state.itemsFavorites.filter((item) => item.id !== action.payload)
      state.itemsQuantityFavorites--;
    },
    setLoading(state) {
      state.loading = true;
    },
    addHeart(state, action) {
      const currentItem = state.items.find((item) => item.id === action.payload);
      currentItem.isFavorite = true;
    },
    removeHeart(state, action) {
      const currentItem = state.items.find((item) => item.id === action.payload);
      currentItem.isFavorite = false;
    },
  }
})


export const catsActions = catsSlice.actions;
export default catsSlice.reducer;