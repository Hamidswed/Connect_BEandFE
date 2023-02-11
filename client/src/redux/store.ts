import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/product";
import userReducer from "./slice/user";

const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
