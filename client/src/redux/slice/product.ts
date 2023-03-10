import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/productType";

const favouriteItems =
  localStorage.getItem("favorites") != null
    ? JSON.parse(localStorage.getItem("favorites") as string)
    : [];

type InitialType = {
  products: ProductType[];
  productDetail: ProductType;
  favorites: ProductType[];
  carts: ProductType[];
  totalPrice: number;
};

const initialState: InitialType = {
  products: [],
  productDetail: {
    id: 1,
    title: "",
    price: 0,
    image: "",
    images: "",
    qty: 0,
    description: "",
  },
  favorites: favouriteItems,
  carts: [],
  totalPrice: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductData: (state, action) => {
      state.products = action.payload;
    },
    getProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const index = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      // const updatedProduct = { ...action.payload, qty: 1 };

      if (index === -1) {
        state.carts.push(action.payload);
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
