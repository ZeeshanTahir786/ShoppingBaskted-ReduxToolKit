import { createSlice } from "@reduxjs/toolkit";
import { ProductItem } from "../../global";
import { initialState } from "../store/state";

const basketSlice = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return item;
        }
        return {
          ...item,
          added: true,
        };
      });
    },
    remove: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          added: false,
        };
      });
    },
  },
});
export const { add, remove } = basketSlice.actions;
export { basketSlice };
