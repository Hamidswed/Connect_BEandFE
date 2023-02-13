import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInput: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getUserInput: (state, action) => {
      state.userInput = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
