import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/productType";

type InitialType = {
  products: ProductType[];
  favorites: ProductType[];
  carts: ProductType[];
  totalPrice: number;
  isAddToFav: boolean;
};

const initialState: InitialType = {
  products: [],
  favorites: [],
  carts: [],
  totalPrice: 0,
  isAddToFav: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductData: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const index = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedProduct = { ...action.payload, qty: 1 };

      if (index === -1) {
        state.carts.push(updatedProduct);
      } else {
        state.carts[index].qty++;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[index].qty === 1 && index >= 0) {
        state.carts.splice(index, 1);
      } else {
        state.carts[index].qty--;
      }
    },
    removeAll: (state, action) => {
      const index = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      index >= 0 && state.carts.splice(index, 1);
    },
    totalPrice: (state) => {
      state.totalPrice = state.carts.reduce((acc, curr) => {
        return acc + curr.qty * curr.price;
      }, 0);
    },
    addToFavorite: (state, action) => {
      const index = state.favorites.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.favorites.push(action.payload);
        state.isAddToFav = true;
        localStorage.setItem(
          "favorites",
          JSON.stringify(state.favorites.map((item) => item))
        );
      }
    },
    removeFromFavorite: (state, action) => {
      const index = state.favorites.findIndex(
        (item) => item.id === action.payload.id
      );
      index >= 0 && state.favorites.splice(index, 1);
      localStorage.setItem(
        "favorites",
        JSON.stringify(state.favorites.map((item) => item))
      );
    },
  },
});

export const actions = productSlice.actions;
export default productSlice.reducer;
