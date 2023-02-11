import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/userType";

type InitialType = {
  users: UserType[];
};
const initialState: InitialType = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserType>) => {
      state.users.push(action.payload);
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
