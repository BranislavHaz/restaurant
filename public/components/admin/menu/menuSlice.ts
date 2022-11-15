import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type MenuInputsState = {
  unix: number;
  type: string;
  order: number;
  value?: string;
};

type AddPayload = {
  unix: number;
  type: string;
};

const initialState: MenuInputsState[] = [];

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addAll: (state, action: PayloadAction<MenuInputsState[]>) => {
      return [...state, ...action.payload];
    },
    add: (state, action: PayloadAction<AddPayload>) => {
      const { unix, type } = action.payload;

      const filteredState = current(state).filter(
        (el) => el.unix === unix && el.type === type
      );

      const higestOrder = filteredState.length
        ? filteredState.reduce((prev, curr) =>
            prev.order > curr.order ? prev : curr
          )
        : null;

      const currentOrder = higestOrder ? higestOrder.order + 1 : 0;

      return [...state, { ...action.payload, order: currentOrder, value: "" }];
    },
    edit: (state, action: PayloadAction<MenuInputsState>) => {
      const { unix, order, type, value } = action.payload;

      const newState = state;

      const index = newState.findIndex(
        (el) => el.unix === unix && el.type === type && el.order === order
      );

      if (index >= 0) {
        newState[index].value = value;
      } else {
        newState.push(action.payload);
      }

      return newState;
    },
    remove: (state, action: PayloadAction<MenuInputsState>) => {
      const { unix, order, type } = action.payload;
      const newState = state;
      const index = newState.findIndex(
        (el) => el.unix === unix && el.type === type && el.order === order
      );
      newState.splice(index, 1);

      return newState;
    },
    removeAll: () => {
      return [];
    },
  },
});

export const { addAll, add, edit, remove, removeAll } = menuSlice.actions;

export default menuSlice.reducer;
