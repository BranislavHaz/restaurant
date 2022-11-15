import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";

export type WeekSliceState = {
  selectedWeek: number;
  currentWeek: number;
};

type AddPayload = {
  selectedWeek: number;
};

const initialState: WeekSliceState = {
  currentWeek: moment().week(),
  selectedWeek: moment().week(),
};

export const weekSlice = createSlice({
  name: "week",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<AddPayload>) => {
      return { ...state, selectedWeek: action.payload.selectedWeek };
    },
  },
});

export const { add } = weekSlice.actions;

export default weekSlice.reducer;
