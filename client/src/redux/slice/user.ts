import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/userType";

type InitialType = {
  user: UserType;
  isLogin: boolean;
};
const initialState: InitialType = {
  user: {
    id: 1,
    name: "",
    age: 1,
    email: "",
    password: "",
    telephone: 0,
    address: "",
    image: "",
  },
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    loginHandler: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
